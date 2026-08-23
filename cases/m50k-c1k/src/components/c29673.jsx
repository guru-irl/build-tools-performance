import React from 'react';
const LABEL_29673 = 'component_29673';
export function Component29673({ value = 29673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29673, 'data-value': derived.doubled }, children);
}
export default Component29673;
