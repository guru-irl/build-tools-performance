import React from 'react';
const LABEL_18260 = 'component_18260';
export function Component18260({ value = 18260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18260, 'data-value': derived.doubled }, children);
}
export default Component18260;
