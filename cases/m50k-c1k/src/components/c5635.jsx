import React from 'react';
const LABEL_5635 = 'component_5635';
export function Component5635({ value = 5635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5635, 'data-value': derived.doubled }, children);
}
export default Component5635;
