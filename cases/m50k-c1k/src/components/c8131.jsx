import React from 'react';
const LABEL_8131 = 'component_8131';
export function Component8131({ value = 8131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8131, 'data-value': derived.doubled }, children);
}
export default Component8131;
