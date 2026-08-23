import React from 'react';
const LABEL_8315 = 'component_8315';
export function Component8315({ value = 8315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8315, 'data-value': derived.doubled }, children);
}
export default Component8315;
