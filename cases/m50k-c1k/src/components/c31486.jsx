import React from 'react';
const LABEL_31486 = 'component_31486';
export function Component31486({ value = 31486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31486, 'data-value': derived.doubled }, children);
}
export default Component31486;
