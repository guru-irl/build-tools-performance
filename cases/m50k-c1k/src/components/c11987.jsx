import React from 'react';
const LABEL_11987 = 'component_11987';
export function Component11987({ value = 11987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11987, 'data-value': derived.doubled }, children);
}
export default Component11987;
