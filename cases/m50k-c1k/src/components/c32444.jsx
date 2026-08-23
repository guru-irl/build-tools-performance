import React from 'react';
const LABEL_32444 = 'component_32444';
export function Component32444({ value = 32444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32444, 'data-value': derived.doubled }, children);
}
export default Component32444;
