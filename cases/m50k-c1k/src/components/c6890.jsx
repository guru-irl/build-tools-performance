import React from 'react';
const LABEL_6890 = 'component_6890';
export function Component6890({ value = 6890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6890, 'data-value': derived.doubled }, children);
}
export default Component6890;
