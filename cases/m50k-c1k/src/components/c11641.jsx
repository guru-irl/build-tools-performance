import React from 'react';
const LABEL_11641 = 'component_11641';
export function Component11641({ value = 11641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11641, 'data-value': derived.doubled }, children);
}
export default Component11641;
