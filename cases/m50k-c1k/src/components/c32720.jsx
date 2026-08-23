import React from 'react';
const LABEL_32720 = 'component_32720';
export function Component32720({ value = 32720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32720, 'data-value': derived.doubled }, children);
}
export default Component32720;
