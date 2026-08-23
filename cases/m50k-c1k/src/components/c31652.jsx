import React from 'react';
const LABEL_31652 = 'component_31652';
export function Component31652({ value = 31652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31652, 'data-value': derived.doubled }, children);
}
export default Component31652;
