import React from 'react';
const LABEL_44806 = 'component_44806';
export function Component44806({ value = 44806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44806, 'data-value': derived.doubled }, children);
}
export default Component44806;
