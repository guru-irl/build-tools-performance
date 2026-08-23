import React from 'react';
const LABEL_14769 = 'component_14769';
export function Component14769({ value = 14769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14769, 'data-value': derived.doubled }, children);
}
export default Component14769;
