import React from 'react';
const LABEL_28890 = 'component_28890';
export function Component28890({ value = 28890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28890, 'data-value': derived.doubled }, children);
}
export default Component28890;
