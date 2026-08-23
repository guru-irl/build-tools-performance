import React from 'react';
const LABEL_33492 = 'component_33492';
export function Component33492({ value = 33492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33492, 'data-value': derived.doubled }, children);
}
export default Component33492;
