import React from 'react';
const LABEL_46240 = 'component_46240';
export function Component46240({ value = 46240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46240, 'data-value': derived.doubled }, children);
}
export default Component46240;
