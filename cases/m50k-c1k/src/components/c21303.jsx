import React from 'react';
const LABEL_21303 = 'component_21303';
export function Component21303({ value = 21303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21303, 'data-value': derived.doubled }, children);
}
export default Component21303;
