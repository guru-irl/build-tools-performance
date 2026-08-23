import React from 'react';
const LABEL_22244 = 'component_22244';
export function Component22244({ value = 22244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22244, 'data-value': derived.doubled }, children);
}
export default Component22244;
