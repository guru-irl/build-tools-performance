import React from 'react';
const LABEL_35323 = 'component_35323';
export function Component35323({ value = 35323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35323, 'data-value': derived.doubled }, children);
}
export default Component35323;
