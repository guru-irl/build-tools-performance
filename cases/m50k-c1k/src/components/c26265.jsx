import React from 'react';
const LABEL_26265 = 'component_26265';
export function Component26265({ value = 26265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26265, 'data-value': derived.doubled }, children);
}
export default Component26265;
