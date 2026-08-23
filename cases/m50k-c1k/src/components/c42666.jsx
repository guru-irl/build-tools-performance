import React from 'react';
const LABEL_42666 = 'component_42666';
export function Component42666({ value = 42666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42666, 'data-value': derived.doubled }, children);
}
export default Component42666;
