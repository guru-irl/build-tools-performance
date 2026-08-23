import React from 'react';
const LABEL_3235 = 'component_3235';
export function Component3235({ value = 3235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3235, 'data-value': derived.doubled }, children);
}
export default Component3235;
