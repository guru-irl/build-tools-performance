import React from 'react';
const LABEL_15935 = 'component_15935';
export function Component15935({ value = 15935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15935, 'data-value': derived.doubled }, children);
}
export default Component15935;
