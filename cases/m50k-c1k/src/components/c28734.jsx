import React from 'react';
const LABEL_28734 = 'component_28734';
export function Component28734({ value = 28734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28734, 'data-value': derived.doubled }, children);
}
export default Component28734;
