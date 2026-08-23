import React from 'react';
const LABEL_46720 = 'component_46720';
export function Component46720({ value = 46720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46720, 'data-value': derived.doubled }, children);
}
export default Component46720;
