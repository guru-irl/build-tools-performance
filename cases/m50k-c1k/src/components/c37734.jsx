import React from 'react';
const LABEL_37734 = 'component_37734';
export function Component37734({ value = 37734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37734, 'data-value': derived.doubled }, children);
}
export default Component37734;
