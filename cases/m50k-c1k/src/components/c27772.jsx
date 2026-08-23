import React from 'react';
const LABEL_27772 = 'component_27772';
export function Component27772({ value = 27772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27772, 'data-value': derived.doubled }, children);
}
export default Component27772;
