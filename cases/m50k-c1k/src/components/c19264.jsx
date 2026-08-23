import React from 'react';
const LABEL_19264 = 'component_19264';
export function Component19264({ value = 19264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19264, 'data-value': derived.doubled }, children);
}
export default Component19264;
