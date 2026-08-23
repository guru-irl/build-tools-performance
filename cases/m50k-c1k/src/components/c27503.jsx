import React from 'react';
const LABEL_27503 = 'component_27503';
export function Component27503({ value = 27503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27503, 'data-value': derived.doubled }, children);
}
export default Component27503;
