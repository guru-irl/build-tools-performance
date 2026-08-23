import React from 'react';
const LABEL_8420 = 'component_8420';
export function Component8420({ value = 8420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8420, 'data-value': derived.doubled }, children);
}
export default Component8420;
