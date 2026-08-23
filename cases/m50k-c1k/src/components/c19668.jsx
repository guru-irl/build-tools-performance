import React from 'react';
const LABEL_19668 = 'component_19668';
export function Component19668({ value = 19668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19668, 'data-value': derived.doubled }, children);
}
export default Component19668;
