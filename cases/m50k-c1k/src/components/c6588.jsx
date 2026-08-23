import React from 'react';
const LABEL_6588 = 'component_6588';
export function Component6588({ value = 6588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6588, 'data-value': derived.doubled }, children);
}
export default Component6588;
