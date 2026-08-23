import React from 'react';
const LABEL_5693 = 'component_5693';
export function Component5693({ value = 5693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5693, 'data-value': derived.doubled }, children);
}
export default Component5693;
