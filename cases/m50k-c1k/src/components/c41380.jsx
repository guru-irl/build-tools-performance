import React from 'react';
const LABEL_41380 = 'component_41380';
export function Component41380({ value = 41380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41380, 'data-value': derived.doubled }, children);
}
export default Component41380;
