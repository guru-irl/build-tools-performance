import React from 'react';
const LABEL_31062 = 'component_31062';
export function Component31062({ value = 31062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31062, 'data-value': derived.doubled }, children);
}
export default Component31062;
