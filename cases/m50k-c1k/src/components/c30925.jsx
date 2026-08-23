import React from 'react';
const LABEL_30925 = 'component_30925';
export function Component30925({ value = 30925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30925, 'data-value': derived.doubled }, children);
}
export default Component30925;
