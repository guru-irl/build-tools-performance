import React from 'react';
const LABEL_46698 = 'component_46698';
export function Component46698({ value = 46698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46698, 'data-value': derived.doubled }, children);
}
export default Component46698;
