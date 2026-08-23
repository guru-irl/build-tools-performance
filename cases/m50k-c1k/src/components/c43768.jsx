import React from 'react';
const LABEL_43768 = 'component_43768';
export function Component43768({ value = 43768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43768, 'data-value': derived.doubled }, children);
}
export default Component43768;
