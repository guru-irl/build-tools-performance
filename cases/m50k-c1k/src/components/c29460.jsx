import React from 'react';
const LABEL_29460 = 'component_29460';
export function Component29460({ value = 29460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29460, 'data-value': derived.doubled }, children);
}
export default Component29460;
