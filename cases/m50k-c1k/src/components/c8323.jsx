import React from 'react';
const LABEL_8323 = 'component_8323';
export function Component8323({ value = 8323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8323, 'data-value': derived.doubled }, children);
}
export default Component8323;
