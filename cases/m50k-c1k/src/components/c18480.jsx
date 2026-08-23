import React from 'react';
const LABEL_18480 = 'component_18480';
export function Component18480({ value = 18480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18480, 'data-value': derived.doubled }, children);
}
export default Component18480;
