import React from 'react';
const LABEL_24410 = 'component_24410';
export function Component24410({ value = 24410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24410, 'data-value': derived.doubled }, children);
}
export default Component24410;
