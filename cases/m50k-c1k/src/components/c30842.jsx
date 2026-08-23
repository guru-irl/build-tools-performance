import React from 'react';
const LABEL_30842 = 'component_30842';
export function Component30842({ value = 30842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30842, 'data-value': derived.doubled }, children);
}
export default Component30842;
