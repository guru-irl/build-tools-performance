import React from 'react';
const LABEL_16071 = 'component_16071';
export function Component16071({ value = 16071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16071, 'data-value': derived.doubled }, children);
}
export default Component16071;
