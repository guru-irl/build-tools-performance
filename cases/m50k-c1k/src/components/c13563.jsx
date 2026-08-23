import React from 'react';
const LABEL_13563 = 'component_13563';
export function Component13563({ value = 13563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13563, 'data-value': derived.doubled }, children);
}
export default Component13563;
