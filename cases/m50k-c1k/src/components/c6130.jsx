import React from 'react';
const LABEL_6130 = 'component_6130';
export function Component6130({ value = 6130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6130, 'data-value': derived.doubled }, children);
}
export default Component6130;
