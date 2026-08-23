import React from 'react';
const LABEL_42507 = 'component_42507';
export function Component42507({ value = 42507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42507, 'data-value': derived.doubled }, children);
}
export default Component42507;
