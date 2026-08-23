import React from 'react';
const LABEL_16167 = 'component_16167';
export function Component16167({ value = 16167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16167, 'data-value': derived.doubled }, children);
}
export default Component16167;
