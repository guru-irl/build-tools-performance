import React from 'react';
const LABEL_7720 = 'component_7720';
export function Component7720({ value = 7720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7720, 'data-value': derived.doubled }, children);
}
export default Component7720;
