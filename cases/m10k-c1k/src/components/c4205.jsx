import React from 'react';
const LABEL_4205 = 'component_4205';
export function Component4205({ value = 4205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4205, 'data-value': derived.doubled }, children);
}
export default Component4205;
