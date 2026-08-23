import React from 'react';
const LABEL_769 = 'component_769';
export function Component769({ value = 769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_769, 'data-value': derived.doubled }, children);
}
export default Component769;
