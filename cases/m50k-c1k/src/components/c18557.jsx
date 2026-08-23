import React from 'react';
const LABEL_18557 = 'component_18557';
export function Component18557({ value = 18557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18557, 'data-value': derived.doubled }, children);
}
export default Component18557;
