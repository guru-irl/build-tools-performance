import React from 'react';
const LABEL_5781 = 'component_5781';
export function Component5781({ value = 5781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5781, 'data-value': derived.doubled }, children);
}
export default Component5781;
