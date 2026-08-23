import React from 'react';
const LABEL_20561 = 'component_20561';
export function Component20561({ value = 20561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20561, 'data-value': derived.doubled }, children);
}
export default Component20561;
