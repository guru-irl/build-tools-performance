import React from 'react';
const LABEL_13501 = 'component_13501';
export function Component13501({ value = 13501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13501, 'data-value': derived.doubled }, children);
}
export default Component13501;
