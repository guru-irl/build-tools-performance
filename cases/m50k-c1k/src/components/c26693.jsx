import React from 'react';
const LABEL_26693 = 'component_26693';
export function Component26693({ value = 26693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26693, 'data-value': derived.doubled }, children);
}
export default Component26693;
