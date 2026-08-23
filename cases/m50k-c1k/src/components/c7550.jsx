import React from 'react';
const LABEL_7550 = 'component_7550';
export function Component7550({ value = 7550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7550, 'data-value': derived.doubled }, children);
}
export default Component7550;
