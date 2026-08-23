import React from 'react';
const LABEL_38075 = 'component_38075';
export function Component38075({ value = 38075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38075, 'data-value': derived.doubled }, children);
}
export default Component38075;
