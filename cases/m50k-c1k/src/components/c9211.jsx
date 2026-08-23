import React from 'react';
const LABEL_9211 = 'component_9211';
export function Component9211({ value = 9211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9211, 'data-value': derived.doubled }, children);
}
export default Component9211;
