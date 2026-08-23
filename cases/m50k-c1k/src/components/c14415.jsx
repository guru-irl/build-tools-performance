import React from 'react';
const LABEL_14415 = 'component_14415';
export function Component14415({ value = 14415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14415, 'data-value': derived.doubled }, children);
}
export default Component14415;
