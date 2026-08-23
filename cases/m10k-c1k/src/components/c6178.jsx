import React from 'react';
const LABEL_6178 = 'component_6178';
export function Component6178({ value = 6178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6178, 'data-value': derived.doubled }, children);
}
export default Component6178;
