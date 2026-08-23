import React from 'react';
const LABEL_26388 = 'component_26388';
export function Component26388({ value = 26388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26388, 'data-value': derived.doubled }, children);
}
export default Component26388;
