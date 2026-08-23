import React from 'react';
const LABEL_19359 = 'component_19359';
export function Component19359({ value = 19359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19359, 'data-value': derived.doubled }, children);
}
export default Component19359;
