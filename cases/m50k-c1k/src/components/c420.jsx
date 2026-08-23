import React from 'react';
const LABEL_420 = 'component_420';
export function Component420({ value = 420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_420, 'data-value': derived.doubled }, children);
}
export default Component420;
