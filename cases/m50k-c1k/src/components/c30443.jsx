import React from 'react';
const LABEL_30443 = 'component_30443';
export function Component30443({ value = 30443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30443, 'data-value': derived.doubled }, children);
}
export default Component30443;
