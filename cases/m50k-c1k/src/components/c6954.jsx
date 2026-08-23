import React from 'react';
const LABEL_6954 = 'component_6954';
export function Component6954({ value = 6954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6954, 'data-value': derived.doubled }, children);
}
export default Component6954;
