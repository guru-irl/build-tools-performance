import React from 'react';
const LABEL_20323 = 'component_20323';
export function Component20323({ value = 20323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20323, 'data-value': derived.doubled }, children);
}
export default Component20323;
