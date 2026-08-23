import React from 'react';
const LABEL_19236 = 'component_19236';
export function Component19236({ value = 19236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19236, 'data-value': derived.doubled }, children);
}
export default Component19236;
