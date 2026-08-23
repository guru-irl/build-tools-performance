import React from 'react';
const LABEL_19904 = 'component_19904';
export function Component19904({ value = 19904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19904, 'data-value': derived.doubled }, children);
}
export default Component19904;
