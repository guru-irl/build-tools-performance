import React from 'react';
const LABEL_19417 = 'component_19417';
export function Component19417({ value = 19417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19417, 'data-value': derived.doubled }, children);
}
export default Component19417;
