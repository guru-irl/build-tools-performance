import React from 'react';
const LABEL_39071 = 'component_39071';
export function Component39071({ value = 39071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39071, 'data-value': derived.doubled }, children);
}
export default Component39071;
