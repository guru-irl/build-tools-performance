import React from 'react';
const LABEL_40322 = 'component_40322';
export function Component40322({ value = 40322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40322, 'data-value': derived.doubled }, children);
}
export default Component40322;
