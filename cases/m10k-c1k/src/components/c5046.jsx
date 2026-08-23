import React from 'react';
const LABEL_5046 = 'component_5046';
export function Component5046({ value = 5046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5046, 'data-value': derived.doubled }, children);
}
export default Component5046;
