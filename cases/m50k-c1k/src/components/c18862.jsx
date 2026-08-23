import React from 'react';
const LABEL_18862 = 'component_18862';
export function Component18862({ value = 18862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18862, 'data-value': derived.doubled }, children);
}
export default Component18862;
