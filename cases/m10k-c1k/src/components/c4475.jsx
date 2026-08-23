import React from 'react';
const LABEL_4475 = 'component_4475';
export function Component4475({ value = 4475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4475, 'data-value': derived.doubled }, children);
}
export default Component4475;
