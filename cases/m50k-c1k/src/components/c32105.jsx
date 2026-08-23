import React from 'react';
const LABEL_32105 = 'component_32105';
export function Component32105({ value = 32105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32105, 'data-value': derived.doubled }, children);
}
export default Component32105;
