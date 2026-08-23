import React from 'react';
const LABEL_29998 = 'component_29998';
export function Component29998({ value = 29998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29998, 'data-value': derived.doubled }, children);
}
export default Component29998;
