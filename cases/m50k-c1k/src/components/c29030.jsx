import React from 'react';
const LABEL_29030 = 'component_29030';
export function Component29030({ value = 29030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29030, 'data-value': derived.doubled }, children);
}
export default Component29030;
