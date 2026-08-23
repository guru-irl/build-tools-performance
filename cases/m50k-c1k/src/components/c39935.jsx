import React from 'react';
const LABEL_39935 = 'component_39935';
export function Component39935({ value = 39935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39935, 'data-value': derived.doubled }, children);
}
export default Component39935;
