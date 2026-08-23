import React from 'react';
const LABEL_24463 = 'component_24463';
export function Component24463({ value = 24463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24463, 'data-value': derived.doubled }, children);
}
export default Component24463;
