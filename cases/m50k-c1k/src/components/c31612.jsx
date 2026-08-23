import React from 'react';
const LABEL_31612 = 'component_31612';
export function Component31612({ value = 31612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31612, 'data-value': derived.doubled }, children);
}
export default Component31612;
