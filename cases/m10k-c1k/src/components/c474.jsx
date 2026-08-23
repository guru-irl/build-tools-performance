import React from 'react';
const LABEL_474 = 'component_474';
export function Component474({ value = 474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_474, 'data-value': derived.doubled }, children);
}
export default Component474;
