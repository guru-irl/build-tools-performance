import React from 'react';
const LABEL_22693 = 'component_22693';
export function Component22693({ value = 22693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22693, 'data-value': derived.doubled }, children);
}
export default Component22693;
