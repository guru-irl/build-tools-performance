import React from 'react';
const LABEL_35693 = 'component_35693';
export function Component35693({ value = 35693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35693, 'data-value': derived.doubled }, children);
}
export default Component35693;
