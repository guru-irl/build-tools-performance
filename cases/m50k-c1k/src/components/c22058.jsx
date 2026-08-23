import React from 'react';
const LABEL_22058 = 'component_22058';
export function Component22058({ value = 22058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22058, 'data-value': derived.doubled }, children);
}
export default Component22058;
