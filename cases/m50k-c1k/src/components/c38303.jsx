import React from 'react';
const LABEL_38303 = 'component_38303';
export function Component38303({ value = 38303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38303, 'data-value': derived.doubled }, children);
}
export default Component38303;
