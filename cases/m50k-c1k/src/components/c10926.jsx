import React from 'react';
const LABEL_10926 = 'component_10926';
export function Component10926({ value = 10926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10926, 'data-value': derived.doubled }, children);
}
export default Component10926;
