import React from 'react';
const LABEL_38871 = 'component_38871';
export function Component38871({ value = 38871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38871, 'data-value': derived.doubled }, children);
}
export default Component38871;
