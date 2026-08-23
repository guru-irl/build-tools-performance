import React from 'react';
const LABEL_13735 = 'component_13735';
export function Component13735({ value = 13735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13735, 'data-value': derived.doubled }, children);
}
export default Component13735;
