import React from 'react';
const LABEL_4322 = 'component_4322';
export function Component4322({ value = 4322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4322, 'data-value': derived.doubled }, children);
}
export default Component4322;
