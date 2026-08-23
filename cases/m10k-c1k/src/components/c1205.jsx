import React from 'react';
const LABEL_1205 = 'component_1205';
export function Component1205({ value = 1205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1205, 'data-value': derived.doubled }, children);
}
export default Component1205;
