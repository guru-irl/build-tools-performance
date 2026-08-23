import React from 'react';
const LABEL_1693 = 'component_1693';
export function Component1693({ value = 1693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1693, 'data-value': derived.doubled }, children);
}
export default Component1693;
