import React from 'react';
const LABEL_22720 = 'component_22720';
export function Component22720({ value = 22720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22720, 'data-value': derived.doubled }, children);
}
export default Component22720;
