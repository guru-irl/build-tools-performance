import React from 'react';
const LABEL_28323 = 'component_28323';
export function Component28323({ value = 28323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28323, 'data-value': derived.doubled }, children);
}
export default Component28323;
