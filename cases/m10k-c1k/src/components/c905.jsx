import React from 'react';
const LABEL_905 = 'component_905';
export function Component905({ value = 905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_905, 'data-value': derived.doubled }, children);
}
export default Component905;
