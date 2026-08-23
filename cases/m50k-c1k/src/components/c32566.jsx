import React from 'react';
const LABEL_32566 = 'component_32566';
export function Component32566({ value = 32566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32566, 'data-value': derived.doubled }, children);
}
export default Component32566;
