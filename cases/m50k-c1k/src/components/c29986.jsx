import React from 'react';
const LABEL_29986 = 'component_29986';
export function Component29986({ value = 29986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29986, 'data-value': derived.doubled }, children);
}
export default Component29986;
