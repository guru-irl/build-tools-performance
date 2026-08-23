import React from 'react';
const LABEL_39120 = 'component_39120';
export function Component39120({ value = 39120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39120, 'data-value': derived.doubled }, children);
}
export default Component39120;
