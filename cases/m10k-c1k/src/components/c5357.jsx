import React from 'react';
const LABEL_5357 = 'component_5357';
export function Component5357({ value = 5357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5357, 'data-value': derived.doubled }, children);
}
export default Component5357;
