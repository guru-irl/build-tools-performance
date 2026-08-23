import React from 'react';
const LABEL_875 = 'component_875';
export function Component875({ value = 875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_875, 'data-value': derived.doubled }, children);
}
export default Component875;
