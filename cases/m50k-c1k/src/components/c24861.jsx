import React from 'react';
const LABEL_24861 = 'component_24861';
export function Component24861({ value = 24861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24861, 'data-value': derived.doubled }, children);
}
export default Component24861;
