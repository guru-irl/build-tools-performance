import React from 'react';
const LABEL_3231 = 'component_3231';
export function Component3231({ value = 3231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3231, 'data-value': derived.doubled }, children);
}
export default Component3231;
