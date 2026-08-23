import React from 'react';
const LABEL_13462 = 'component_13462';
export function Component13462({ value = 13462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13462, 'data-value': derived.doubled }, children);
}
export default Component13462;
