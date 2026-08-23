import React from 'react';
const LABEL_29507 = 'component_29507';
export function Component29507({ value = 29507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29507, 'data-value': derived.doubled }, children);
}
export default Component29507;
