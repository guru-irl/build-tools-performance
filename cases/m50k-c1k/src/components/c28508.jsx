import React from 'react';
const LABEL_28508 = 'component_28508';
export function Component28508({ value = 28508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28508, 'data-value': derived.doubled }, children);
}
export default Component28508;
