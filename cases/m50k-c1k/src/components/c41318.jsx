import React from 'react';
const LABEL_41318 = 'component_41318';
export function Component41318({ value = 41318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41318, 'data-value': derived.doubled }, children);
}
export default Component41318;
