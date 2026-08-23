import React from 'react';
const LABEL_16 = 'component_16';
export function Component16({ value = 16, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16, 'data-value': derived.doubled }, children);
}
export default Component16;
