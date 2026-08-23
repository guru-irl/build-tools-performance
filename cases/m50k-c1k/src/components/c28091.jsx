import React from 'react';
const LABEL_28091 = 'component_28091';
export function Component28091({ value = 28091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28091, 'data-value': derived.doubled }, children);
}
export default Component28091;
