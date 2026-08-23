import React from 'react';
const LABEL_4091 = 'component_4091';
export function Component4091({ value = 4091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4091, 'data-value': derived.doubled }, children);
}
export default Component4091;
