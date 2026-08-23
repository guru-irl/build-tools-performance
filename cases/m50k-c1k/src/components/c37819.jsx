import React from 'react';
const LABEL_37819 = 'component_37819';
export function Component37819({ value = 37819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37819, 'data-value': derived.doubled }, children);
}
export default Component37819;
