import React from 'react';
const LABEL_30612 = 'component_30612';
export function Component30612({ value = 30612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30612, 'data-value': derived.doubled }, children);
}
export default Component30612;
