import React from 'react';
const LABEL_13205 = 'component_13205';
export function Component13205({ value = 13205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13205, 'data-value': derived.doubled }, children);
}
export default Component13205;
