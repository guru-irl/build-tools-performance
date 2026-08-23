import React from 'react';
const LABEL_36323 = 'component_36323';
export function Component36323({ value = 36323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36323, 'data-value': derived.doubled }, children);
}
export default Component36323;
