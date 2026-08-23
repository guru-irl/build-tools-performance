import React from 'react';
const LABEL_10318 = 'component_10318';
export function Component10318({ value = 10318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10318, 'data-value': derived.doubled }, children);
}
export default Component10318;
