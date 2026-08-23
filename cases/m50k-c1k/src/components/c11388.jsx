import React from 'react';
const LABEL_11388 = 'component_11388';
export function Component11388({ value = 11388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11388, 'data-value': derived.doubled }, children);
}
export default Component11388;
