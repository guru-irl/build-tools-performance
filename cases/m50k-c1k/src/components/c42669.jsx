import React from 'react';
const LABEL_42669 = 'component_42669';
export function Component42669({ value = 42669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42669, 'data-value': derived.doubled }, children);
}
export default Component42669;
