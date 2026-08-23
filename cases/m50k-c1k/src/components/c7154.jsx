import React from 'react';
const LABEL_7154 = 'component_7154';
export function Component7154({ value = 7154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7154, 'data-value': derived.doubled }, children);
}
export default Component7154;
