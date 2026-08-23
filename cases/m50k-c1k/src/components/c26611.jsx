import React from 'react';
const LABEL_26611 = 'component_26611';
export function Component26611({ value = 26611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26611, 'data-value': derived.doubled }, children);
}
export default Component26611;
