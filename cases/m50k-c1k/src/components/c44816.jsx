import React from 'react';
const LABEL_44816 = 'component_44816';
export function Component44816({ value = 44816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44816, 'data-value': derived.doubled }, children);
}
export default Component44816;
