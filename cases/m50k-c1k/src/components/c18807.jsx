import React from 'react';
const LABEL_18807 = 'component_18807';
export function Component18807({ value = 18807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18807, 'data-value': derived.doubled }, children);
}
export default Component18807;
