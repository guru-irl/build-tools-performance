import React from 'react';
const LABEL_29796 = 'component_29796';
export function Component29796({ value = 29796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29796, 'data-value': derived.doubled }, children);
}
export default Component29796;
