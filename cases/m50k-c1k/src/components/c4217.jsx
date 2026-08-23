import React from 'react';
const LABEL_4217 = 'component_4217';
export function Component4217({ value = 4217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4217, 'data-value': derived.doubled }, children);
}
export default Component4217;
