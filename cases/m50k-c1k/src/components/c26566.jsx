import React from 'react';
const LABEL_26566 = 'component_26566';
export function Component26566({ value = 26566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26566, 'data-value': derived.doubled }, children);
}
export default Component26566;
