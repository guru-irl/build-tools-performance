import React from 'react';
const LABEL_25073 = 'component_25073';
export function Component25073({ value = 25073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25073, 'data-value': derived.doubled }, children);
}
export default Component25073;
