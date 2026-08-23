import React from 'react';
const LABEL_41705 = 'component_41705';
export function Component41705({ value = 41705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41705, 'data-value': derived.doubled }, children);
}
export default Component41705;
