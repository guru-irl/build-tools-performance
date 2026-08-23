import React from 'react';
const LABEL_9871 = 'component_9871';
export function Component9871({ value = 9871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9871, 'data-value': derived.doubled }, children);
}
export default Component9871;
