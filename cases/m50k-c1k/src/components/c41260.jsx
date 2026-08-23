import React from 'react';
const LABEL_41260 = 'component_41260';
export function Component41260({ value = 41260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41260, 'data-value': derived.doubled }, children);
}
export default Component41260;
