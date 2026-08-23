import React from 'react';
const LABEL_5415 = 'component_5415';
export function Component5415({ value = 5415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5415, 'data-value': derived.doubled }, children);
}
export default Component5415;
