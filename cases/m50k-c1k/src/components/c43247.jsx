import React from 'react';
const LABEL_43247 = 'component_43247';
export function Component43247({ value = 43247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43247, 'data-value': derived.doubled }, children);
}
export default Component43247;
