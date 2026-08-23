import React from 'react';
const LABEL_25181 = 'component_25181';
export function Component25181({ value = 25181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25181, 'data-value': derived.doubled }, children);
}
export default Component25181;
