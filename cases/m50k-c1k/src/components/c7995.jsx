import React from 'react';
const LABEL_7995 = 'component_7995';
export function Component7995({ value = 7995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7995, 'data-value': derived.doubled }, children);
}
export default Component7995;
