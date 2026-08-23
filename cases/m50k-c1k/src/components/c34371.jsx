import React from 'react';
const LABEL_34371 = 'component_34371';
export function Component34371({ value = 34371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34371, 'data-value': derived.doubled }, children);
}
export default Component34371;
