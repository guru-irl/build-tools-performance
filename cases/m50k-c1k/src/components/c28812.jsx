import React from 'react';
const LABEL_28812 = 'component_28812';
export function Component28812({ value = 28812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28812, 'data-value': derived.doubled }, children);
}
export default Component28812;
