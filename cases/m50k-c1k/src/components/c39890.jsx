import React from 'react';
const LABEL_39890 = 'component_39890';
export function Component39890({ value = 39890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39890, 'data-value': derived.doubled }, children);
}
export default Component39890;
