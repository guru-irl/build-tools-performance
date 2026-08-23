import React from 'react';
const LABEL_40323 = 'component_40323';
export function Component40323({ value = 40323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40323, 'data-value': derived.doubled }, children);
}
export default Component40323;
