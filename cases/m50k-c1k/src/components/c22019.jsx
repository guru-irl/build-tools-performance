import React from 'react';
const LABEL_22019 = 'component_22019';
export function Component22019({ value = 22019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22019, 'data-value': derived.doubled }, children);
}
export default Component22019;
