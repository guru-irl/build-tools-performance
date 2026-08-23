import React from 'react';
const LABEL_25364 = 'component_25364';
export function Component25364({ value = 25364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25364, 'data-value': derived.doubled }, children);
}
export default Component25364;
