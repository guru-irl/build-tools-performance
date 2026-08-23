import React from 'react';
const LABEL_4935 = 'component_4935';
export function Component4935({ value = 4935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4935, 'data-value': derived.doubled }, children);
}
export default Component4935;
