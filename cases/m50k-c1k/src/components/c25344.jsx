import React from 'react';
const LABEL_25344 = 'component_25344';
export function Component25344({ value = 25344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25344, 'data-value': derived.doubled }, children);
}
export default Component25344;
