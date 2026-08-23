import React from 'react';
const LABEL_8816 = 'component_8816';
export function Component8816({ value = 8816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8816, 'data-value': derived.doubled }, children);
}
export default Component8816;
