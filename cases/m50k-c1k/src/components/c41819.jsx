import React from 'react';
const LABEL_41819 = 'component_41819';
export function Component41819({ value = 41819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41819, 'data-value': derived.doubled }, children);
}
export default Component41819;
