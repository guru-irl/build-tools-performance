import React from 'react';
const LABEL_3693 = 'component_3693';
export function Component3693({ value = 3693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3693, 'data-value': derived.doubled }, children);
}
export default Component3693;
