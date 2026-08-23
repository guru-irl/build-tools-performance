import React from 'react';
const LABEL_46895 = 'component_46895';
export function Component46895({ value = 46895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46895, 'data-value': derived.doubled }, children);
}
export default Component46895;
