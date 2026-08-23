import React from 'react';
const LABEL_33783 = 'component_33783';
export function Component33783({ value = 33783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33783, 'data-value': derived.doubled }, children);
}
export default Component33783;
