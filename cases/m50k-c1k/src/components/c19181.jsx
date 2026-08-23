import React from 'react';
const LABEL_19181 = 'component_19181';
export function Component19181({ value = 19181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19181, 'data-value': derived.doubled }, children);
}
export default Component19181;
