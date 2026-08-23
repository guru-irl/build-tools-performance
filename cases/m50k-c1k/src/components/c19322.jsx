import React from 'react';
const LABEL_19322 = 'component_19322';
export function Component19322({ value = 19322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19322, 'data-value': derived.doubled }, children);
}
export default Component19322;
