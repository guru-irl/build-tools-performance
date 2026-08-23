import React from 'react';
const LABEL_5890 = 'component_5890';
export function Component5890({ value = 5890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5890, 'data-value': derived.doubled }, children);
}
export default Component5890;
