import React from 'react';
const LABEL_33386 = 'component_33386';
export function Component33386({ value = 33386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33386, 'data-value': derived.doubled }, children);
}
export default Component33386;
