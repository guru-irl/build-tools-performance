import React from 'react';
const LABEL_10764 = 'component_10764';
export function Component10764({ value = 10764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10764, 'data-value': derived.doubled }, children);
}
export default Component10764;
