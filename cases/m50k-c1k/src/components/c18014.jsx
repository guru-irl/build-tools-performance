import React from 'react';
const LABEL_18014 = 'component_18014';
export function Component18014({ value = 18014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18014, 'data-value': derived.doubled }, children);
}
export default Component18014;
