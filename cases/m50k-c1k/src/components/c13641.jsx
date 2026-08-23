import React from 'react';
const LABEL_13641 = 'component_13641';
export function Component13641({ value = 13641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13641, 'data-value': derived.doubled }, children);
}
export default Component13641;
