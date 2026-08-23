import React from 'react';
const LABEL_3769 = 'component_3769';
export function Component3769({ value = 3769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3769, 'data-value': derived.doubled }, children);
}
export default Component3769;
