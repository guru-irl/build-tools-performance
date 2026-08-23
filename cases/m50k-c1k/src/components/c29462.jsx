import React from 'react';
const LABEL_29462 = 'component_29462';
export function Component29462({ value = 29462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29462, 'data-value': derived.doubled }, children);
}
export default Component29462;
