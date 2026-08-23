import React from 'react';
const LABEL_19277 = 'component_19277';
export function Component19277({ value = 19277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19277, 'data-value': derived.doubled }, children);
}
export default Component19277;
