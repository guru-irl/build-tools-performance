import React from 'react';
const LABEL_6935 = 'component_6935';
export function Component6935({ value = 6935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6935, 'data-value': derived.doubled }, children);
}
export default Component6935;
