import React from 'react';
const LABEL_10410 = 'component_10410';
export function Component10410({ value = 10410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10410, 'data-value': derived.doubled }, children);
}
export default Component10410;
