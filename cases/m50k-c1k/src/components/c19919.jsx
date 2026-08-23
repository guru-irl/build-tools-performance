import React from 'react';
const LABEL_19919 = 'component_19919';
export function Component19919({ value = 19919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19919, 'data-value': derived.doubled }, children);
}
export default Component19919;
