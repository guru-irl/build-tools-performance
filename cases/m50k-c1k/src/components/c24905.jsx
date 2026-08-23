import React from 'react';
const LABEL_24905 = 'component_24905';
export function Component24905({ value = 24905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24905, 'data-value': derived.doubled }, children);
}
export default Component24905;
