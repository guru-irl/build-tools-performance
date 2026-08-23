import React from 'react';
const LABEL_8612 = 'component_8612';
export function Component8612({ value = 8612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8612, 'data-value': derived.doubled }, children);
}
export default Component8612;
