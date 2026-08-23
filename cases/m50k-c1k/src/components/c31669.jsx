import React from 'react';
const LABEL_31669 = 'component_31669';
export function Component31669({ value = 31669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31669, 'data-value': derived.doubled }, children);
}
export default Component31669;
