import React from 'react';
const LABEL_29441 = 'component_29441';
export function Component29441({ value = 29441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29441, 'data-value': derived.doubled }, children);
}
export default Component29441;
