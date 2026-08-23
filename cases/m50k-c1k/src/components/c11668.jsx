import React from 'react';
const LABEL_11668 = 'component_11668';
export function Component11668({ value = 11668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11668, 'data-value': derived.doubled }, children);
}
export default Component11668;
