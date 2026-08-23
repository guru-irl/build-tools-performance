import React from 'react';
const LABEL_38791 = 'component_38791';
export function Component38791({ value = 38791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38791, 'data-value': derived.doubled }, children);
}
export default Component38791;
