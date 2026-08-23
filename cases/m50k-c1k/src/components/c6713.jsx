import React from 'react';
const LABEL_6713 = 'component_6713';
export function Component6713({ value = 6713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6713, 'data-value': derived.doubled }, children);
}
export default Component6713;
