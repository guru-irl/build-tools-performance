import React from 'react';
const LABEL_24895 = 'component_24895';
export function Component24895({ value = 24895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24895, 'data-value': derived.doubled }, children);
}
export default Component24895;
