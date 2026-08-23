import React from 'react';
const LABEL_18612 = 'component_18612';
export function Component18612({ value = 18612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18612, 'data-value': derived.doubled }, children);
}
export default Component18612;
