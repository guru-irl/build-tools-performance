import React from 'react';
const LABEL_38862 = 'component_38862';
export function Component38862({ value = 38862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38862, 'data-value': derived.doubled }, children);
}
export default Component38862;
