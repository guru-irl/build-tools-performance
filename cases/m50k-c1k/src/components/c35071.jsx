import React from 'react';
const LABEL_35071 = 'component_35071';
export function Component35071({ value = 35071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35071, 'data-value': derived.doubled }, children);
}
export default Component35071;
