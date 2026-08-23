import React from 'react';
const LABEL_21769 = 'component_21769';
export function Component21769({ value = 21769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21769, 'data-value': derived.doubled }, children);
}
export default Component21769;
