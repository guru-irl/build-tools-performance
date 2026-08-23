import React from 'react';
const LABEL_16769 = 'component_16769';
export function Component16769({ value = 16769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16769, 'data-value': derived.doubled }, children);
}
export default Component16769;
