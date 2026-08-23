import React from 'react';
const LABEL_36410 = 'component_36410';
export function Component36410({ value = 36410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36410, 'data-value': derived.doubled }, children);
}
export default Component36410;
