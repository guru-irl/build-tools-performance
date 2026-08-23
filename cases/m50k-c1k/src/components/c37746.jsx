import React from 'react';
const LABEL_37746 = 'component_37746';
export function Component37746({ value = 37746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37746, 'data-value': derived.doubled }, children);
}
export default Component37746;
