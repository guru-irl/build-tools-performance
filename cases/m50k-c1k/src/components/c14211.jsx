import React from 'react';
const LABEL_14211 = 'component_14211';
export function Component14211({ value = 14211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14211, 'data-value': derived.doubled }, children);
}
export default Component14211;
