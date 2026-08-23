import React from 'react';
const LABEL_42032 = 'component_42032';
export function Component42032({ value = 42032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42032, 'data-value': derived.doubled }, children);
}
export default Component42032;
