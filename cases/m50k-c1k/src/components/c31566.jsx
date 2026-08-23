import React from 'react';
const LABEL_31566 = 'component_31566';
export function Component31566({ value = 31566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31566, 'data-value': derived.doubled }, children);
}
export default Component31566;
