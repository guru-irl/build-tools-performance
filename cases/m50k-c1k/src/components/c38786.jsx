import React from 'react';
const LABEL_38786 = 'component_38786';
export function Component38786({ value = 38786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38786, 'data-value': derived.doubled }, children);
}
export default Component38786;
