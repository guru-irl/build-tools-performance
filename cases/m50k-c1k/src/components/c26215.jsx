import React from 'react';
const LABEL_26215 = 'component_26215';
export function Component26215({ value = 26215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26215, 'data-value': derived.doubled }, children);
}
export default Component26215;
