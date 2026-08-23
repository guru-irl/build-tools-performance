import React from 'react';
const LABEL_13181 = 'component_13181';
export function Component13181({ value = 13181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13181, 'data-value': derived.doubled }, children);
}
export default Component13181;
