import React from 'react';
const LABEL_24597 = 'component_24597';
export function Component24597({ value = 24597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24597, 'data-value': derived.doubled }, children);
}
export default Component24597;
