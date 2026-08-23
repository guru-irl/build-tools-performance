import React from 'react';
const LABEL_4972 = 'component_4972';
export function Component4972({ value = 4972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4972, 'data-value': derived.doubled }, children);
}
export default Component4972;
