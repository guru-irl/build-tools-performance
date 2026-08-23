import React from 'react';
const LABEL_22298 = 'component_22298';
export function Component22298({ value = 22298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22298, 'data-value': derived.doubled }, children);
}
export default Component22298;
