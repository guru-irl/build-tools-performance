import React from 'react';
const LABEL_4431 = 'component_4431';
export function Component4431({ value = 4431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4431, 'data-value': derived.doubled }, children);
}
export default Component4431;
