import React from 'react';
const LABEL_6357 = 'component_6357';
export function Component6357({ value = 6357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6357, 'data-value': derived.doubled }, children);
}
export default Component6357;
