import React from 'react';
const LABEL_38697 = 'component_38697';
export function Component38697({ value = 38697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38697, 'data-value': derived.doubled }, children);
}
export default Component38697;
