import React from 'react';
const LABEL_6420 = 'component_6420';
export function Component6420({ value = 6420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6420, 'data-value': derived.doubled }, children);
}
export default Component6420;
