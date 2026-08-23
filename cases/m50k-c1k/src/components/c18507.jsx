import React from 'react';
const LABEL_18507 = 'component_18507';
export function Component18507({ value = 18507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18507, 'data-value': derived.doubled }, children);
}
export default Component18507;
