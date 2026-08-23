import React from 'react';
const LABEL_22016 = 'component_22016';
export function Component22016({ value = 22016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22016, 'data-value': derived.doubled }, children);
}
export default Component22016;
