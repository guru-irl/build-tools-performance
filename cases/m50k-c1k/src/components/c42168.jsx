import React from 'react';
const LABEL_42168 = 'component_42168';
export function Component42168({ value = 42168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42168, 'data-value': derived.doubled }, children);
}
export default Component42168;
