import React from 'react';
const LABEL_38028 = 'component_38028';
export function Component38028({ value = 38028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38028, 'data-value': derived.doubled }, children);
}
export default Component38028;
