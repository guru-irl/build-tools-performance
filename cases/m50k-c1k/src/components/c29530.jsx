import React from 'react';
const LABEL_29530 = 'component_29530';
export function Component29530({ value = 29530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29530, 'data-value': derived.doubled }, children);
}
export default Component29530;
