import React from 'react';
const LABEL_32935 = 'component_32935';
export function Component32935({ value = 32935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32935, 'data-value': derived.doubled }, children);
}
export default Component32935;
