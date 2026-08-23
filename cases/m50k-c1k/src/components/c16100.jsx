import React from 'react';
const LABEL_16100 = 'component_16100';
export function Component16100({ value = 16100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16100, 'data-value': derived.doubled }, children);
}
export default Component16100;
