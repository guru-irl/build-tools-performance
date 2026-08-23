import React from 'react';
const LABEL_46451 = 'component_46451';
export function Component46451({ value = 46451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46451, 'data-value': derived.doubled }, children);
}
export default Component46451;
