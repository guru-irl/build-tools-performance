import React from 'react';
const LABEL_7641 = 'component_7641';
export function Component7641({ value = 7641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7641, 'data-value': derived.doubled }, children);
}
export default Component7641;
