import React from 'react';
const LABEL_46195 = 'component_46195';
export function Component46195({ value = 46195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46195, 'data-value': derived.doubled }, children);
}
export default Component46195;
