import React from 'react';
const LABEL_22136 = 'component_22136';
export function Component22136({ value = 22136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22136, 'data-value': derived.doubled }, children);
}
export default Component22136;
