import React from 'react';
const LABEL_2322 = 'component_2322';
export function Component2322({ value = 2322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2322, 'data-value': derived.doubled }, children);
}
export default Component2322;
