import React from 'react';
const LABEL_8615 = 'component_8615';
export function Component8615({ value = 8615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8615, 'data-value': derived.doubled }, children);
}
export default Component8615;
