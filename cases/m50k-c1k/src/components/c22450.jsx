import React from 'react';
const LABEL_22450 = 'component_22450';
export function Component22450({ value = 22450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22450, 'data-value': derived.doubled }, children);
}
export default Component22450;
