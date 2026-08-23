import React from 'react';
const LABEL_14925 = 'component_14925';
export function Component14925({ value = 14925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14925, 'data-value': derived.doubled }, children);
}
export default Component14925;
