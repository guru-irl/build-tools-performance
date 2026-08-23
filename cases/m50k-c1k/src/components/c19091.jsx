import React from 'react';
const LABEL_19091 = 'component_19091';
export function Component19091({ value = 19091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19091, 'data-value': derived.doubled }, children);
}
export default Component19091;
