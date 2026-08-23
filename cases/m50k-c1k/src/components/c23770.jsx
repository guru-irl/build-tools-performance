import React from 'react';
const LABEL_23770 = 'component_23770';
export function Component23770({ value = 23770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23770, 'data-value': derived.doubled }, children);
}
export default Component23770;
