import React from 'react';
const LABEL_676 = 'component_676';
export function Component676({ value = 676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_676, 'data-value': derived.doubled }, children);
}
export default Component676;
