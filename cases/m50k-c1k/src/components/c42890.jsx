import React from 'react';
const LABEL_42890 = 'component_42890';
export function Component42890({ value = 42890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42890, 'data-value': derived.doubled }, children);
}
export default Component42890;
