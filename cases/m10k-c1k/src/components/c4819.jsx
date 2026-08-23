import React from 'react';
const LABEL_4819 = 'component_4819';
export function Component4819({ value = 4819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4819, 'data-value': derived.doubled }, children);
}
export default Component4819;
