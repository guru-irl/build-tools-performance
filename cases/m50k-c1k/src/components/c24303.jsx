import React from 'react';
const LABEL_24303 = 'component_24303';
export function Component24303({ value = 24303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24303, 'data-value': derived.doubled }, children);
}
export default Component24303;
