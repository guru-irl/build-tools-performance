import React from 'react';
const LABEL_6071 = 'component_6071';
export function Component6071({ value = 6071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6071, 'data-value': derived.doubled }, children);
}
export default Component6071;
