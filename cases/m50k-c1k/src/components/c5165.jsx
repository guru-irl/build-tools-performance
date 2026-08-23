import React from 'react';
const LABEL_5165 = 'component_5165';
export function Component5165({ value = 5165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5165, 'data-value': derived.doubled }, children);
}
export default Component5165;
