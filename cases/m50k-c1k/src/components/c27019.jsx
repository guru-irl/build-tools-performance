import React from 'react';
const LABEL_27019 = 'component_27019';
export function Component27019({ value = 27019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27019, 'data-value': derived.doubled }, children);
}
export default Component27019;
