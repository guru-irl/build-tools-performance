import React from 'react';
const LABEL_38819 = 'component_38819';
export function Component38819({ value = 38819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38819, 'data-value': derived.doubled }, children);
}
export default Component38819;
