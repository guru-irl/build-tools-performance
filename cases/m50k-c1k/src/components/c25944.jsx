import React from 'react';
const LABEL_25944 = 'component_25944';
export function Component25944({ value = 25944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25944, 'data-value': derived.doubled }, children);
}
export default Component25944;
