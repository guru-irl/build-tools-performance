import React from 'react';
const LABEL_11507 = 'component_11507';
export function Component11507({ value = 11507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11507, 'data-value': derived.doubled }, children);
}
export default Component11507;
