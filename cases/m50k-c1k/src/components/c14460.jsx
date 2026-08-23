import React from 'react';
const LABEL_14460 = 'component_14460';
export function Component14460({ value = 14460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14460, 'data-value': derived.doubled }, children);
}
export default Component14460;
