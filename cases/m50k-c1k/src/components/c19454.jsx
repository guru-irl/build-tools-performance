import React from 'react';
const LABEL_19454 = 'component_19454';
export function Component19454({ value = 19454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19454, 'data-value': derived.doubled }, children);
}
export default Component19454;
