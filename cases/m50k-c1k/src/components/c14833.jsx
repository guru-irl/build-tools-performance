import React from 'react';
const LABEL_14833 = 'component_14833';
export function Component14833({ value = 14833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14833, 'data-value': derived.doubled }, children);
}
export default Component14833;
