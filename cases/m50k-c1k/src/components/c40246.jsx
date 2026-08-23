import React from 'react';
const LABEL_40246 = 'component_40246';
export function Component40246({ value = 40246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40246, 'data-value': derived.doubled }, children);
}
export default Component40246;
