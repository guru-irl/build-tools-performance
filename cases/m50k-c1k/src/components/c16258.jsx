import React from 'react';
const LABEL_16258 = 'component_16258';
export function Component16258({ value = 16258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16258, 'data-value': derived.doubled }, children);
}
export default Component16258;
