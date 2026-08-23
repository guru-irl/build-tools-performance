import React from 'react';
const LABEL_19151 = 'component_19151';
export function Component19151({ value = 19151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19151, 'data-value': derived.doubled }, children);
}
export default Component19151;
