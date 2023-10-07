const stimuli = [{"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 2", "conclusion": "Therefore Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 2", "conclusion": "Therefore not Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 2", "conclusion": "Therefore Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 2", "conclusion": "Therefore not Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 3", "conclusion": "Therefore Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 3", "conclusion": "Therefore not Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 3", "conclusion": "Therefore Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 3", "conclusion": "Therefore not Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 3", "conclusion": "Therefore Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 3", "conclusion": "Therefore not Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 3", "conclusion": "Therefore Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 3", "conclusion": "Therefore not Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 4", "conclusion": "Therefore Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 4", "conclusion": "Therefore not Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 4", "conclusion": "Therefore Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 4", "conclusion": "Therefore not Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 4", "conclusion": "Therefore Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 4", "conclusion": "Therefore not Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 4", "conclusion": "Therefore Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 4", "conclusion": "Therefore not Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 4", "conclusion": "Therefore Thing 3."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 4", "conclusion": "Therefore not Thing 3."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 4", "conclusion": "Therefore Thing 3."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 4", "conclusion": "Therefore not Thing 3."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 5", "conclusion": "Therefore Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 5", "conclusion": "Therefore not Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 5", "conclusion": "Therefore Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 5", "conclusion": "Therefore not Thing 1."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 5", "conclusion": "Therefore Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 5", "conclusion": "Therefore not Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 5", "conclusion": "Therefore Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 5", "conclusion": "Therefore not Thing 2."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 5", "conclusion": "Therefore Thing 3."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 5", "conclusion": "Therefore not Thing 3."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 5", "conclusion": "Therefore Thing 3."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 5", "conclusion": "Therefore not Thing 3."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 5", "conclusion": "Therefore Thing 4."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "Thing 5", "conclusion": "Therefore not Thing 4."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 5", "conclusion": "Therefore Thing 4."}, {"world": ["If Thing 1 then Thing 2.", "If Thing 2 then Thing 3.", "If Thing 3 then Thing 4.", "If Thing 4 then Thing 5.", "If Thing 5 then Thing 6."], "premise": "not Thing 5", "conclusion": "Therefore not Thing 4."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "Thing 1", "conclusion": "Therefore Thing 3."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "Thing 1", "conclusion": "Therefore not Thing 3."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "not Thing 1", "conclusion": "Therefore Thing 3."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "not Thing 1", "conclusion": "Therefore not Thing 3."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "Thing 5", "conclusion": "Therefore Thing 2."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "Thing 5", "conclusion": "Therefore not Thing 2."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "not Thing 5", "conclusion": "Therefore Thing 2."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "not Thing 5", "conclusion": "Therefore not Thing 2."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "Thing 5", "conclusion": "Therefore Thing 4."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "Thing 5", "conclusion": "Therefore not Thing 4."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "not Thing 5", "conclusion": "Therefore Thing 4."}, {"world": ["If Thing 2 then Thing 5.", "If Thing 3 then Thing 1.", "If Thing 3 then Thing 6.", "If Thing 4 then Thing 5.", "If Thing 6 then Thing 1."], "premise": "not Thing 5", "conclusion": "Therefore not Thing 4."}]