import React from 'react';
const LABEL_20184 = 'component_20184';
export function Component20184({ value = 20184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20184, 'data-value': derived.doubled }, children);
}
export default Component20184;
