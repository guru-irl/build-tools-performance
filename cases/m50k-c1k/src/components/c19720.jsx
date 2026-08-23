import React from 'react';
const LABEL_19720 = 'component_19720';
export function Component19720({ value = 19720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19720, 'data-value': derived.doubled }, children);
}
export default Component19720;
