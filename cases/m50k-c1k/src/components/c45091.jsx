import React from 'react';
const LABEL_45091 = 'component_45091';
export function Component45091({ value = 45091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45091, 'data-value': derived.doubled }, children);
}
export default Component45091;
