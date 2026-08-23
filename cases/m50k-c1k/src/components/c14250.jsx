import React from 'react';
const LABEL_14250 = 'component_14250';
export function Component14250({ value = 14250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14250, 'data-value': derived.doubled }, children);
}
export default Component14250;
