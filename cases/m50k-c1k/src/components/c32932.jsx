import React from 'react';
const LABEL_32932 = 'component_32932';
export function Component32932({ value = 32932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32932, 'data-value': derived.doubled }, children);
}
export default Component32932;
