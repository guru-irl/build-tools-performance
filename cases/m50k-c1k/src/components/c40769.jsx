import React from 'react';
const LABEL_40769 = 'component_40769';
export function Component40769({ value = 40769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40769, 'data-value': derived.doubled }, children);
}
export default Component40769;
