import React from 'react';
const LABEL_18276 = 'component_18276';
export function Component18276({ value = 18276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18276, 'data-value': derived.doubled }, children);
}
export default Component18276;
