import React from 'react';
const LABEL_30303 = 'component_30303';
export function Component30303({ value = 30303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30303, 'data-value': derived.doubled }, children);
}
export default Component30303;
