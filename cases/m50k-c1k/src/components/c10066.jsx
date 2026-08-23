import React from 'react';
const LABEL_10066 = 'component_10066';
export function Component10066({ value = 10066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10066, 'data-value': derived.doubled }, children);
}
export default Component10066;
