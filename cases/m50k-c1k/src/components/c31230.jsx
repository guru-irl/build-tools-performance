import React from 'react';
const LABEL_31230 = 'component_31230';
export function Component31230({ value = 31230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31230, 'data-value': derived.doubled }, children);
}
export default Component31230;
