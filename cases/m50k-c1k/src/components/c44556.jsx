import React from 'react';
const LABEL_44556 = 'component_44556';
export function Component44556({ value = 44556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44556, 'data-value': derived.doubled }, children);
}
export default Component44556;
