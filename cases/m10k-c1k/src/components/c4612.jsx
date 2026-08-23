import React from 'react';
const LABEL_4612 = 'component_4612';
export function Component4612({ value = 4612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4612, 'data-value': derived.doubled }, children);
}
export default Component4612;
