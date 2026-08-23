import React from 'react';
const LABEL_24323 = 'component_24323';
export function Component24323({ value = 24323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24323, 'data-value': derived.doubled }, children);
}
export default Component24323;
