import React from 'react';
const LABEL_6737 = 'component_6737';
export function Component6737({ value = 6737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6737, 'data-value': derived.doubled }, children);
}
export default Component6737;
