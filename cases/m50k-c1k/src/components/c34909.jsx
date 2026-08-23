import React from 'react';
const LABEL_34909 = 'component_34909';
export function Component34909({ value = 34909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34909, 'data-value': derived.doubled }, children);
}
export default Component34909;
