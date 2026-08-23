import React from 'react';
const LABEL_26746 = 'component_26746';
export function Component26746({ value = 26746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26746, 'data-value': derived.doubled }, children);
}
export default Component26746;
