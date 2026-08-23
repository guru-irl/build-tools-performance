import React from 'react';
const LABEL_25512 = 'component_25512';
export function Component25512({ value = 25512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25512, 'data-value': derived.doubled }, children);
}
export default Component25512;
