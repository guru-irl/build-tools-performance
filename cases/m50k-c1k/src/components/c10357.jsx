import React from 'react';
const LABEL_10357 = 'component_10357';
export function Component10357({ value = 10357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10357, 'data-value': derived.doubled }, children);
}
export default Component10357;
