import React from 'react';
const LABEL_23641 = 'component_23641';
export function Component23641({ value = 23641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23641, 'data-value': derived.doubled }, children);
}
export default Component23641;
