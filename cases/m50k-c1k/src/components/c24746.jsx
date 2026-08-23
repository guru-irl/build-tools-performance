import React from 'react';
const LABEL_24746 = 'component_24746';
export function Component24746({ value = 24746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24746, 'data-value': derived.doubled }, children);
}
export default Component24746;
