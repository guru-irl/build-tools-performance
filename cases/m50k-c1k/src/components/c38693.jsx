import React from 'react';
const LABEL_38693 = 'component_38693';
export function Component38693({ value = 38693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38693, 'data-value': derived.doubled }, children);
}
export default Component38693;
