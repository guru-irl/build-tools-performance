import React from 'react';
const LABEL_11574 = 'component_11574';
export function Component11574({ value = 11574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11574, 'data-value': derived.doubled }, children);
}
export default Component11574;
