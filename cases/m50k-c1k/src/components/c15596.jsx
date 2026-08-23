import React from 'react';
const LABEL_15596 = 'component_15596';
export function Component15596({ value = 15596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15596, 'data-value': derived.doubled }, children);
}
export default Component15596;
