import React from 'react';
const LABEL_29508 = 'component_29508';
export function Component29508({ value = 29508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29508, 'data-value': derived.doubled }, children);
}
export default Component29508;
