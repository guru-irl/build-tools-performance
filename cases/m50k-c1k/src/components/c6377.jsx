import React from 'react';
const LABEL_6377 = 'component_6377';
export function Component6377({ value = 6377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6377, 'data-value': derived.doubled }, children);
}
export default Component6377;
