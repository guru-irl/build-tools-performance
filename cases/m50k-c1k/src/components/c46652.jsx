import React from 'react';
const LABEL_46652 = 'component_46652';
export function Component46652({ value = 46652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46652, 'data-value': derived.doubled }, children);
}
export default Component46652;
