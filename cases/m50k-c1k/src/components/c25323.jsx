import React from 'react';
const LABEL_25323 = 'component_25323';
export function Component25323({ value = 25323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25323, 'data-value': derived.doubled }, children);
}
export default Component25323;
