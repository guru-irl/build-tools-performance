import React from 'react';
const LABEL_26569 = 'component_26569';
export function Component26569({ value = 26569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26569, 'data-value': derived.doubled }, children);
}
export default Component26569;
