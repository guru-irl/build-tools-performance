import React from 'react';
const LABEL_4017 = 'component_4017';
export function Component4017({ value = 4017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4017, 'data-value': derived.doubled }, children);
}
export default Component4017;
