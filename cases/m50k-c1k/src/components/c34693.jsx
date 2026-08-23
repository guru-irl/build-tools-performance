import React from 'react';
const LABEL_34693 = 'component_34693';
export function Component34693({ value = 34693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34693, 'data-value': derived.doubled }, children);
}
export default Component34693;
