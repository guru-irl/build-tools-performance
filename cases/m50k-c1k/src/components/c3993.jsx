import React from 'react';
const LABEL_3993 = 'component_3993';
export function Component3993({ value = 3993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3993, 'data-value': derived.doubled }, children);
}
export default Component3993;
