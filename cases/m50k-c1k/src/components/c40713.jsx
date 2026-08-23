import React from 'react';
const LABEL_40713 = 'component_40713';
export function Component40713({ value = 40713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40713, 'data-value': derived.doubled }, children);
}
export default Component40713;
