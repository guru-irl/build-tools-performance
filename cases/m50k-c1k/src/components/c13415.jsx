import React from 'react';
const LABEL_13415 = 'component_13415';
export function Component13415({ value = 13415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13415, 'data-value': derived.doubled }, children);
}
export default Component13415;
