import React from 'react';
const LABEL_720 = 'component_720';
export function Component720({ value = 720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_720, 'data-value': derived.doubled }, children);
}
export default Component720;
