import React from 'react';
const LABEL_26597 = 'component_26597';
export function Component26597({ value = 26597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26597, 'data-value': derived.doubled }, children);
}
export default Component26597;
