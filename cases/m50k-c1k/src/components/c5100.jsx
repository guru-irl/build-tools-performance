import React from 'react';
const LABEL_5100 = 'component_5100';
export function Component5100({ value = 5100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5100, 'data-value': derived.doubled }, children);
}
export default Component5100;
