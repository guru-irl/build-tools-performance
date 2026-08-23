import React from 'react';
const LABEL_35120 = 'component_35120';
export function Component35120({ value = 35120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35120, 'data-value': derived.doubled }, children);
}
export default Component35120;
