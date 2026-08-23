import React from 'react';
const LABEL_19013 = 'component_19013';
export function Component19013({ value = 19013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19013, 'data-value': derived.doubled }, children);
}
export default Component19013;
