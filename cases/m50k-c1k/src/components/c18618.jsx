import React from 'react';
const LABEL_18618 = 'component_18618';
export function Component18618({ value = 18618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18618, 'data-value': derived.doubled }, children);
}
export default Component18618;
