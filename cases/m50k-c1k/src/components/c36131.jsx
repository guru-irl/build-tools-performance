import React from 'react';
const LABEL_36131 = 'component_36131';
export function Component36131({ value = 36131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36131, 'data-value': derived.doubled }, children);
}
export default Component36131;
