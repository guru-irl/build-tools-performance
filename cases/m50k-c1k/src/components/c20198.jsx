import React from 'react';
const LABEL_20198 = 'component_20198';
export function Component20198({ value = 20198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20198, 'data-value': derived.doubled }, children);
}
export default Component20198;
