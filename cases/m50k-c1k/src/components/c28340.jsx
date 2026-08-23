import React from 'react';
const LABEL_28340 = 'component_28340';
export function Component28340({ value = 28340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28340, 'data-value': derived.doubled }, children);
}
export default Component28340;
