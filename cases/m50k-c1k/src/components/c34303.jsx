import React from 'react';
const LABEL_34303 = 'component_34303';
export function Component34303({ value = 34303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34303, 'data-value': derived.doubled }, children);
}
export default Component34303;
