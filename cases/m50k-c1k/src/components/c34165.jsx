import React from 'react';
const LABEL_34165 = 'component_34165';
export function Component34165({ value = 34165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34165, 'data-value': derived.doubled }, children);
}
export default Component34165;
