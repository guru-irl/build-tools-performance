import React from 'react';
const LABEL_20568 = 'component_20568';
export function Component20568({ value = 20568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20568, 'data-value': derived.doubled }, children);
}
export default Component20568;
