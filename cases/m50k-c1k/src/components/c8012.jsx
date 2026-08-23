import React from 'react';
const LABEL_8012 = 'component_8012';
export function Component8012({ value = 8012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8012, 'data-value': derived.doubled }, children);
}
export default Component8012;
