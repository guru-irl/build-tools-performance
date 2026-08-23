import React from 'react';
const LABEL_19098 = 'component_19098';
export function Component19098({ value = 19098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19098, 'data-value': derived.doubled }, children);
}
export default Component19098;
