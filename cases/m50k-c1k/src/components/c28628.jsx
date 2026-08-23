import React from 'react';
const LABEL_28628 = 'component_28628';
export function Component28628({ value = 28628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28628, 'data-value': derived.doubled }, children);
}
export default Component28628;
