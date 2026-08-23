import React from 'react';
const LABEL_35566 = 'component_35566';
export function Component35566({ value = 35566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35566, 'data-value': derived.doubled }, children);
}
export default Component35566;
