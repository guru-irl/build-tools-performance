import React from 'react';
const LABEL_30212 = 'component_30212';
export function Component30212({ value = 30212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30212, 'data-value': derived.doubled }, children);
}
export default Component30212;
