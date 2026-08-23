import React from 'react';
const LABEL_30322 = 'component_30322';
export function Component30322({ value = 30322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30322, 'data-value': derived.doubled }, children);
}
export default Component30322;
