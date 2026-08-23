import React from 'react';
const LABEL_1935 = 'component_1935';
export function Component1935({ value = 1935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1935, 'data-value': derived.doubled }, children);
}
export default Component1935;
