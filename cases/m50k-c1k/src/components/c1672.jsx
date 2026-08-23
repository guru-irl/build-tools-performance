import React from 'react';
const LABEL_1672 = 'component_1672';
export function Component1672({ value = 1672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1672, 'data-value': derived.doubled }, children);
}
export default Component1672;
