import React from 'react';
const LABEL_22566 = 'component_22566';
export function Component22566({ value = 22566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22566, 'data-value': derived.doubled }, children);
}
export default Component22566;
