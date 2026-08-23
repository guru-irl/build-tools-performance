import React from 'react';
const LABEL_14184 = 'component_14184';
export function Component14184({ value = 14184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14184, 'data-value': derived.doubled }, children);
}
export default Component14184;
