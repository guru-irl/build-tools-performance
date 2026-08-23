import React from 'react';
const LABEL_37905 = 'component_37905';
export function Component37905({ value = 37905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37905, 'data-value': derived.doubled }, children);
}
export default Component37905;
