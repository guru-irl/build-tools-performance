import React from 'react';
const LABEL_16935 = 'component_16935';
export function Component16935({ value = 16935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16935, 'data-value': derived.doubled }, children);
}
export default Component16935;
