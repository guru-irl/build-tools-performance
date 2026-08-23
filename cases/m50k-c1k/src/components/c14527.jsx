import React from 'react';
const LABEL_14527 = 'component_14527';
export function Component14527({ value = 14527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14527, 'data-value': derived.doubled }, children);
}
export default Component14527;
