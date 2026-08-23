import React from 'react';
const LABEL_44277 = 'component_44277';
export function Component44277({ value = 44277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44277, 'data-value': derived.doubled }, children);
}
export default Component44277;
