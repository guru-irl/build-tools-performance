import React from 'react';
const LABEL_28424 = 'component_28424';
export function Component28424({ value = 28424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28424, 'data-value': derived.doubled }, children);
}
export default Component28424;
