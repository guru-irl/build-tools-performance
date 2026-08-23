import React from 'react';
const LABEL_26995 = 'component_26995';
export function Component26995({ value = 26995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26995, 'data-value': derived.doubled }, children);
}
export default Component26995;
