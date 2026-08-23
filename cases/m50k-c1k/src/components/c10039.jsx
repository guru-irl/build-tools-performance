import React from 'react';
const LABEL_10039 = 'component_10039';
export function Component10039({ value = 10039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10039, 'data-value': derived.doubled }, children);
}
export default Component10039;
