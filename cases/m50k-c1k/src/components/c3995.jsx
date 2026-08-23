import React from 'react';
const LABEL_3995 = 'component_3995';
export function Component3995({ value = 3995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3995, 'data-value': derived.doubled }, children);
}
export default Component3995;
