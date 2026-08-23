import React from 'react';
const LABEL_3739 = 'component_3739';
export function Component3739({ value = 3739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3739, 'data-value': derived.doubled }, children);
}
export default Component3739;
