import React from 'react';
const LABEL_46659 = 'component_46659';
export function Component46659({ value = 46659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46659, 'data-value': derived.doubled }, children);
}
export default Component46659;
