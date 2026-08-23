import React from 'react';
const LABEL_13420 = 'component_13420';
export function Component13420({ value = 13420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13420, 'data-value': derived.doubled }, children);
}
export default Component13420;
