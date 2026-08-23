import React from 'react';
const LABEL_42165 = 'component_42165';
export function Component42165({ value = 42165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42165, 'data-value': derived.doubled }, children);
}
export default Component42165;
