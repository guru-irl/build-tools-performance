import React from 'react';
const LABEL_29862 = 'component_29862';
export function Component29862({ value = 29862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29862, 'data-value': derived.doubled }, children);
}
export default Component29862;
