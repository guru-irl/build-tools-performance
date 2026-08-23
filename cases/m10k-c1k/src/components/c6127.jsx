import React from 'react';
const LABEL_6127 = 'component_6127';
export function Component6127({ value = 6127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6127, 'data-value': derived.doubled }, children);
}
export default Component6127;
