import React from 'react';
const LABEL_4500 = 'component_4500';
export function Component4500({ value = 4500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4500, 'data-value': derived.doubled }, children);
}
export default Component4500;
