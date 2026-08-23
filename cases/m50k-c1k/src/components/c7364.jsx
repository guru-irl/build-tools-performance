import React from 'react';
const LABEL_7364 = 'component_7364';
export function Component7364({ value = 7364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7364, 'data-value': derived.doubled }, children);
}
export default Component7364;
