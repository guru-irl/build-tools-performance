import React from 'react';
const LABEL_16720 = 'component_16720';
export function Component16720({ value = 16720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16720, 'data-value': derived.doubled }, children);
}
export default Component16720;
