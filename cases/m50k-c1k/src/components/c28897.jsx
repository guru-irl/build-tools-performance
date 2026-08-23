import React from 'react';
const LABEL_28897 = 'component_28897';
export function Component28897({ value = 28897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28897, 'data-value': derived.doubled }, children);
}
export default Component28897;
