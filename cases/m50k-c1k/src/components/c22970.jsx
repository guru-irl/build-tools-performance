import React from 'react';
const LABEL_22970 = 'component_22970';
export function Component22970({ value = 22970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22970, 'data-value': derived.doubled }, children);
}
export default Component22970;
