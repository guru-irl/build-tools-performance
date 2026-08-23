import React from 'react';
const LABEL_20261 = 'component_20261';
export function Component20261({ value = 20261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20261, 'data-value': derived.doubled }, children);
}
export default Component20261;
