import React from 'react';
const LABEL_29700 = 'component_29700';
export function Component29700({ value = 29700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29700, 'data-value': derived.doubled }, children);
}
export default Component29700;
