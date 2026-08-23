import React from 'react';
const LABEL_34597 = 'component_34597';
export function Component34597({ value = 34597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34597, 'data-value': derived.doubled }, children);
}
export default Component34597;
