import React from 'react';
const LABEL_36809 = 'component_36809';
export function Component36809({ value = 36809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36809, 'data-value': derived.doubled }, children);
}
export default Component36809;
