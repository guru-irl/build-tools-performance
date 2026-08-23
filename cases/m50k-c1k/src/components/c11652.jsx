import React from 'react';
const LABEL_11652 = 'component_11652';
export function Component11652({ value = 11652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11652, 'data-value': derived.doubled }, children);
}
export default Component11652;
