import React from 'react';
const LABEL_28357 = 'component_28357';
export function Component28357({ value = 28357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28357, 'data-value': derived.doubled }, children);
}
export default Component28357;
