import React from 'react';
const LABEL_18890 = 'component_18890';
export function Component18890({ value = 18890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18890, 'data-value': derived.doubled }, children);
}
export default Component18890;
