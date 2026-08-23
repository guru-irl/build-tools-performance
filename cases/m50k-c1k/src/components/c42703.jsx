import React from 'react';
const LABEL_42703 = 'component_42703';
export function Component42703({ value = 42703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42703, 'data-value': derived.doubled }, children);
}
export default Component42703;
