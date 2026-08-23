import React from 'react';
const LABEL_13995 = 'component_13995';
export function Component13995({ value = 13995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13995, 'data-value': derived.doubled }, children);
}
export default Component13995;
