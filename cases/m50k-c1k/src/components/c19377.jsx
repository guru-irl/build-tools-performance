import React from 'react';
const LABEL_19377 = 'component_19377';
export function Component19377({ value = 19377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19377, 'data-value': derived.doubled }, children);
}
export default Component19377;
