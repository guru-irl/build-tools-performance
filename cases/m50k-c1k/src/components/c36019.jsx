import React from 'react';
const LABEL_36019 = 'component_36019';
export function Component36019({ value = 36019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36019, 'data-value': derived.doubled }, children);
}
export default Component36019;
