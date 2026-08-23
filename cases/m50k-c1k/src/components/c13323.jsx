import React from 'react';
const LABEL_13323 = 'component_13323';
export function Component13323({ value = 13323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13323, 'data-value': derived.doubled }, children);
}
export default Component13323;
