import React from 'react';
const LABEL_36700 = 'component_36700';
export function Component36700({ value = 36700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36700, 'data-value': derived.doubled }, children);
}
export default Component36700;
