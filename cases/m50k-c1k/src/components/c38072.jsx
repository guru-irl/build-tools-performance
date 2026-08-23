import React from 'react';
const LABEL_38072 = 'component_38072';
export function Component38072({ value = 38072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38072, 'data-value': derived.doubled }, children);
}
export default Component38072;
