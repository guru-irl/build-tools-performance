import React from 'react';
const LABEL_13203 = 'component_13203';
export function Component13203({ value = 13203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13203, 'data-value': derived.doubled }, children);
}
export default Component13203;
