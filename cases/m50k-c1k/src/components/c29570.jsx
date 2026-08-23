import React from 'react';
const LABEL_29570 = 'component_29570';
export function Component29570({ value = 29570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29570, 'data-value': derived.doubled }, children);
}
export default Component29570;
