import React from 'react';
const LABEL_42813 = 'component_42813';
export function Component42813({ value = 42813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42813, 'data-value': derived.doubled }, children);
}
export default Component42813;
