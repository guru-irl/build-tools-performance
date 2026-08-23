import React from 'react';
const LABEL_28061 = 'component_28061';
export function Component28061({ value = 28061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28061, 'data-value': derived.doubled }, children);
}
export default Component28061;
