import React from 'react';
const LABEL_31771 = 'component_31771';
export function Component31771({ value = 31771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31771, 'data-value': derived.doubled }, children);
}
export default Component31771;
