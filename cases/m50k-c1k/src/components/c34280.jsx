import React from 'react';
const LABEL_34280 = 'component_34280';
export function Component34280({ value = 34280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34280, 'data-value': derived.doubled }, children);
}
export default Component34280;
