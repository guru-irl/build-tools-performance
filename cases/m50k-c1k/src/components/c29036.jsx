import React from 'react';
const LABEL_29036 = 'component_29036';
export function Component29036({ value = 29036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29036, 'data-value': derived.doubled }, children);
}
export default Component29036;
