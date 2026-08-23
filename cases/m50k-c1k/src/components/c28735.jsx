import React from 'react';
const LABEL_28735 = 'component_28735';
export function Component28735({ value = 28735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28735, 'data-value': derived.doubled }, children);
}
export default Component28735;
