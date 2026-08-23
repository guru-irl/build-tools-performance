import React from 'react';
const LABEL_29596 = 'component_29596';
export function Component29596({ value = 29596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29596, 'data-value': derived.doubled }, children);
}
export default Component29596;
