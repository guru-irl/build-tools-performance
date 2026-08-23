import React from 'react';
const LABEL_260 = 'component_260';
export function Component260({ value = 260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_260, 'data-value': derived.doubled }, children);
}
export default Component260;
