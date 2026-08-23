import React from 'react';
const LABEL_6975 = 'component_6975';
export function Component6975({ value = 6975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6975, 'data-value': derived.doubled }, children);
}
export default Component6975;
