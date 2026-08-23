import React from 'react';
const LABEL_6693 = 'component_6693';
export function Component6693({ value = 6693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6693, 'data-value': derived.doubled }, children);
}
export default Component6693;
