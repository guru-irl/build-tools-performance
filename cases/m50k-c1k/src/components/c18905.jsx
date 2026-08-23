import React from 'react';
const LABEL_18905 = 'component_18905';
export function Component18905({ value = 18905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18905, 'data-value': derived.doubled }, children);
}
export default Component18905;
