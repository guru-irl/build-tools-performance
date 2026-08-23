import React from 'react';
const LABEL_37568 = 'component_37568';
export function Component37568({ value = 37568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37568, 'data-value': derived.doubled }, children);
}
export default Component37568;
