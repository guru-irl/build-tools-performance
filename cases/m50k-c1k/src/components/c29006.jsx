import React from 'react';
const LABEL_29006 = 'component_29006';
export function Component29006({ value = 29006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29006, 'data-value': derived.doubled }, children);
}
export default Component29006;
