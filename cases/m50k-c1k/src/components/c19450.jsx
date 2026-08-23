import React from 'react';
const LABEL_19450 = 'component_19450';
export function Component19450({ value = 19450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19450, 'data-value': derived.doubled }, children);
}
export default Component19450;
