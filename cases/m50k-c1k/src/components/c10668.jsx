import React from 'react';
const LABEL_10668 = 'component_10668';
export function Component10668({ value = 10668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10668, 'data-value': derived.doubled }, children);
}
export default Component10668;
