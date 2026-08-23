import React from 'react';
const LABEL_26781 = 'component_26781';
export function Component26781({ value = 26781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26781, 'data-value': derived.doubled }, children);
}
export default Component26781;
