import React from 'react';
const LABEL_44313 = 'component_44313';
export function Component44313({ value = 44313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44313, 'data-value': derived.doubled }, children);
}
export default Component44313;
