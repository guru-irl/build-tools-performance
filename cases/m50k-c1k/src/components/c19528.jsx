import React from 'react';
const LABEL_19528 = 'component_19528';
export function Component19528({ value = 19528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19528, 'data-value': derived.doubled }, children);
}
export default Component19528;
