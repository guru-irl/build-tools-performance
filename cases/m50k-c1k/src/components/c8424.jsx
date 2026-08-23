import React from 'react';
const LABEL_8424 = 'component_8424';
export function Component8424({ value = 8424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8424, 'data-value': derived.doubled }, children);
}
export default Component8424;
