import React from 'react';
const LABEL_16353 = 'component_16353';
export function Component16353({ value = 16353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16353, 'data-value': derived.doubled }, children);
}
export default Component16353;
