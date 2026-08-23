import React from 'react';
const LABEL_44734 = 'component_44734';
export function Component44734({ value = 44734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44734, 'data-value': derived.doubled }, children);
}
export default Component44734;
