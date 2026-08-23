import React from 'react';
const LABEL_31693 = 'component_31693';
export function Component31693({ value = 31693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31693, 'data-value': derived.doubled }, children);
}
export default Component31693;
