import React from 'react';
const LABEL_8993 = 'component_8993';
export function Component8993({ value = 8993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8993, 'data-value': derived.doubled }, children);
}
export default Component8993;
