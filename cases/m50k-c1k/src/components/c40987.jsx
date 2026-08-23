import React from 'react';
const LABEL_40987 = 'component_40987';
export function Component40987({ value = 40987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40987, 'data-value': derived.doubled }, children);
}
export default Component40987;
