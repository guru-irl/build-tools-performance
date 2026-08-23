import React from 'react';
const LABEL_4 = 'component_4';
export function Component4({ value = 4, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4, 'data-value': derived.doubled }, children);
}
export default Component4;
