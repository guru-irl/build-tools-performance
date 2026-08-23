import React from 'react';
const LABEL_7344 = 'component_7344';
export function Component7344({ value = 7344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7344, 'data-value': derived.doubled }, children);
}
export default Component7344;
