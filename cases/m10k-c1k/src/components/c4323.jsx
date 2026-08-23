import React from 'react';
const LABEL_4323 = 'component_4323';
export function Component4323({ value = 4323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4323, 'data-value': derived.doubled }, children);
}
export default Component4323;
