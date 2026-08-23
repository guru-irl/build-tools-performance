import React from 'react';
const LABEL_28984 = 'component_28984';
export function Component28984({ value = 28984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28984, 'data-value': derived.doubled }, children);
}
export default Component28984;
