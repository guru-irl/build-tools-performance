import React from 'react';
const LABEL_35819 = 'component_35819';
export function Component35819({ value = 35819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35819, 'data-value': derived.doubled }, children);
}
export default Component35819;
