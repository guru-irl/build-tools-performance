import React from 'react';
const LABEL_19203 = 'component_19203';
export function Component19203({ value = 19203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19203, 'data-value': derived.doubled }, children);
}
export default Component19203;
