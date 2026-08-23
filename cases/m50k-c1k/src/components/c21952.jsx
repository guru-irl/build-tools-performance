import React from 'react';
const LABEL_21952 = 'component_21952';
export function Component21952({ value = 21952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21952, 'data-value': derived.doubled }, children);
}
export default Component21952;
