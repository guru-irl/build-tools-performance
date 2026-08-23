import React from 'react';
const LABEL_11693 = 'component_11693';
export function Component11693({ value = 11693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11693, 'data-value': derived.doubled }, children);
}
export default Component11693;
