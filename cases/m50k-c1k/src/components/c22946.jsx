import React from 'react';
const LABEL_22946 = 'component_22946';
export function Component22946({ value = 22946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22946, 'data-value': derived.doubled }, children);
}
export default Component22946;
