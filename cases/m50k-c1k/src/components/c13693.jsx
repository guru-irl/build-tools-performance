import React from 'react';
const LABEL_13693 = 'component_13693';
export function Component13693({ value = 13693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13693, 'data-value': derived.doubled }, children);
}
export default Component13693;
