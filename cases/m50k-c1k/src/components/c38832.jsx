import React from 'react';
const LABEL_38832 = 'component_38832';
export function Component38832({ value = 38832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38832, 'data-value': derived.doubled }, children);
}
export default Component38832;
