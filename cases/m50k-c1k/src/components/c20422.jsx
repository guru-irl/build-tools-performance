import React from 'react';
const LABEL_20422 = 'component_20422';
export function Component20422({ value = 20422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20422, 'data-value': derived.doubled }, children);
}
export default Component20422;
