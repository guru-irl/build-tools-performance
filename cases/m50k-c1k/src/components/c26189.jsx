import React from 'react';
const LABEL_26189 = 'component_26189';
export function Component26189({ value = 26189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26189, 'data-value': derived.doubled }, children);
}
export default Component26189;
