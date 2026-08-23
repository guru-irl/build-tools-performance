import React from 'react';
const LABEL_29829 = 'component_29829';
export function Component29829({ value = 29829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29829, 'data-value': derived.doubled }, children);
}
export default Component29829;
