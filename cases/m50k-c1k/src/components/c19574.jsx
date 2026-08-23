import React from 'react';
const LABEL_19574 = 'component_19574';
export function Component19574({ value = 19574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19574, 'data-value': derived.doubled }, children);
}
export default Component19574;
