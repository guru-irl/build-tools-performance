import React from 'react';
const LABEL_18210 = 'component_18210';
export function Component18210({ value = 18210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18210, 'data-value': derived.doubled }, children);
}
export default Component18210;
