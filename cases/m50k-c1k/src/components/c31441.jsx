import React from 'react';
const LABEL_31441 = 'component_31441';
export function Component31441({ value = 31441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31441, 'data-value': derived.doubled }, children);
}
export default Component31441;
