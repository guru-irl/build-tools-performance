import React from 'react';
const LABEL_31237 = 'component_31237';
export function Component31237({ value = 31237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31237, 'data-value': derived.doubled }, children);
}
export default Component31237;
