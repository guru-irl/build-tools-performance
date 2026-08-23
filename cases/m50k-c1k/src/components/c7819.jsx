import React from 'react';
const LABEL_7819 = 'component_7819';
export function Component7819({ value = 7819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7819, 'data-value': derived.doubled }, children);
}
export default Component7819;
