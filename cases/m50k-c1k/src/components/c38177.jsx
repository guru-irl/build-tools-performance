import React from 'react';
const LABEL_38177 = 'component_38177';
export function Component38177({ value = 38177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38177, 'data-value': derived.doubled }, children);
}
export default Component38177;
