import React from 'react';
const LABEL_724 = 'component_724';
export function Component724({ value = 724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_724, 'data-value': derived.doubled }, children);
}
export default Component724;
