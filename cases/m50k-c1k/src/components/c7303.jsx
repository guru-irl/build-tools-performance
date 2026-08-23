import React from 'react';
const LABEL_7303 = 'component_7303';
export function Component7303({ value = 7303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7303, 'data-value': derived.doubled }, children);
}
export default Component7303;
