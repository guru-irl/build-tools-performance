import React from 'react';
const LABEL_28566 = 'component_28566';
export function Component28566({ value = 28566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28566, 'data-value': derived.doubled }, children);
}
export default Component28566;
