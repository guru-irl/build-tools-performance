import React from 'react';
const LABEL_29307 = 'component_29307';
export function Component29307({ value = 29307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29307, 'data-value': derived.doubled }, children);
}
export default Component29307;
