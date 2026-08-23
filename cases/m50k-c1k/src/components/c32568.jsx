import React from 'react';
const LABEL_32568 = 'component_32568';
export function Component32568({ value = 32568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32568, 'data-value': derived.doubled }, children);
}
export default Component32568;
