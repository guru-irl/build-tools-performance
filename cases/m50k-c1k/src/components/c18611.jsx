import React from 'react';
const LABEL_18611 = 'component_18611';
export function Component18611({ value = 18611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18611, 'data-value': derived.doubled }, children);
}
export default Component18611;
