import React from 'react';
const LABEL_42769 = 'component_42769';
export function Component42769({ value = 42769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42769, 'data-value': derived.doubled }, children);
}
export default Component42769;
