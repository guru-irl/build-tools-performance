import React from 'react';
const LABEL_37322 = 'component_37322';
export function Component37322({ value = 37322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37322, 'data-value': derived.doubled }, children);
}
export default Component37322;
