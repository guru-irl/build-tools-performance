import React from 'react';
const LABEL_40122 = 'component_40122';
export function Component40122({ value = 40122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40122, 'data-value': derived.doubled }, children);
}
export default Component40122;
