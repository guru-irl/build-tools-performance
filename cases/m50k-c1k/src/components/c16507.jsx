import React from 'react';
const LABEL_16507 = 'component_16507';
export function Component16507({ value = 16507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16507, 'data-value': derived.doubled }, children);
}
export default Component16507;
