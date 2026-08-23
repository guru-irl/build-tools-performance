import React from 'react';
const LABEL_21518 = 'component_21518';
export function Component21518({ value = 21518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21518, 'data-value': derived.doubled }, children);
}
export default Component21518;
