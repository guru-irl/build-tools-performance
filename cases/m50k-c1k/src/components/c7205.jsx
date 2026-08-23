import React from 'react';
const LABEL_7205 = 'component_7205';
export function Component7205({ value = 7205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7205, 'data-value': derived.doubled }, children);
}
export default Component7205;
