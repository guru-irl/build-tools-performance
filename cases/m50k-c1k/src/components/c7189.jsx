import React from 'react';
const LABEL_7189 = 'component_7189';
export function Component7189({ value = 7189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7189, 'data-value': derived.doubled }, children);
}
export default Component7189;
