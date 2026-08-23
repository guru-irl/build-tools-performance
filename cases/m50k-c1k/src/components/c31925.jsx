import React from 'react';
const LABEL_31925 = 'component_31925';
export function Component31925({ value = 31925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31925, 'data-value': derived.doubled }, children);
}
export default Component31925;
