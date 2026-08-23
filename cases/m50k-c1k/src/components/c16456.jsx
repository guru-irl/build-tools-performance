import React from 'react';
const LABEL_16456 = 'component_16456';
export function Component16456({ value = 16456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16456, 'data-value': derived.doubled }, children);
}
export default Component16456;
