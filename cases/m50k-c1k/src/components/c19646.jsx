import React from 'react';
const LABEL_19646 = 'component_19646';
export function Component19646({ value = 19646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19646, 'data-value': derived.doubled }, children);
}
export default Component19646;
