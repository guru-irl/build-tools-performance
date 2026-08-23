import React from 'react';
const LABEL_24935 = 'component_24935';
export function Component24935({ value = 24935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24935, 'data-value': derived.doubled }, children);
}
export default Component24935;
