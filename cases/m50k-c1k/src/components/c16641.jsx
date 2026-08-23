import React from 'react';
const LABEL_16641 = 'component_16641';
export function Component16641({ value = 16641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16641, 'data-value': derived.doubled }, children);
}
export default Component16641;
