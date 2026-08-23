import React from 'react';
const LABEL_36760 = 'component_36760';
export function Component36760({ value = 36760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36760, 'data-value': derived.doubled }, children);
}
export default Component36760;
