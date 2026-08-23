import React from 'react';
const LABEL_19443 = 'component_19443';
export function Component19443({ value = 19443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19443, 'data-value': derived.doubled }, children);
}
export default Component19443;
