import React from 'react';
const LABEL_22192 = 'component_22192';
export function Component22192({ value = 22192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22192, 'data-value': derived.doubled }, children);
}
export default Component22192;
