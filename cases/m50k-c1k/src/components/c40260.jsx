import React from 'react';
const LABEL_40260 = 'component_40260';
export function Component40260({ value = 40260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40260, 'data-value': derived.doubled }, children);
}
export default Component40260;
