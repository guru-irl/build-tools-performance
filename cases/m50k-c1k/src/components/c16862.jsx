import React from 'react';
const LABEL_16862 = 'component_16862';
export function Component16862({ value = 16862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16862, 'data-value': derived.doubled }, children);
}
export default Component16862;
