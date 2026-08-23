import React from 'react';
const LABEL_19905 = 'component_19905';
export function Component19905({ value = 19905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19905, 'data-value': derived.doubled }, children);
}
export default Component19905;
