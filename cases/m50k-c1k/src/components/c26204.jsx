import React from 'react';
const LABEL_26204 = 'component_26204';
export function Component26204({ value = 26204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26204, 'data-value': derived.doubled }, children);
}
export default Component26204;
