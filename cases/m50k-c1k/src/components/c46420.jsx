import React from 'react';
const LABEL_46420 = 'component_46420';
export function Component46420({ value = 46420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46420, 'data-value': derived.doubled }, children);
}
export default Component46420;
