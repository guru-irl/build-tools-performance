import React from 'react';
const LABEL_20322 = 'component_20322';
export function Component20322({ value = 20322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20322, 'data-value': derived.doubled }, children);
}
export default Component20322;
