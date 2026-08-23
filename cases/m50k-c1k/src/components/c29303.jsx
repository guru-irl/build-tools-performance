import React from 'react';
const LABEL_29303 = 'component_29303';
export function Component29303({ value = 29303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29303, 'data-value': derived.doubled }, children);
}
export default Component29303;
