import React from 'react';
const LABEL_29099 = 'component_29099';
export function Component29099({ value = 29099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29099, 'data-value': derived.doubled }, children);
}
export default Component29099;
