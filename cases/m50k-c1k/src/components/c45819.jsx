import React from 'react';
const LABEL_45819 = 'component_45819';
export function Component45819({ value = 45819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45819, 'data-value': derived.doubled }, children);
}
export default Component45819;
