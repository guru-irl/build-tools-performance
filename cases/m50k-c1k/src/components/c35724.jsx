import React from 'react';
const LABEL_35724 = 'component_35724';
export function Component35724({ value = 35724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35724, 'data-value': derived.doubled }, children);
}
export default Component35724;
