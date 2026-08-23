import React from 'react';
const LABEL_7420 = 'component_7420';
export function Component7420({ value = 7420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7420, 'data-value': derived.doubled }, children);
}
export default Component7420;
