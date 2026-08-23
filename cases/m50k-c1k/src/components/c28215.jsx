import React from 'react';
const LABEL_28215 = 'component_28215';
export function Component28215({ value = 28215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28215, 'data-value': derived.doubled }, children);
}
export default Component28215;
