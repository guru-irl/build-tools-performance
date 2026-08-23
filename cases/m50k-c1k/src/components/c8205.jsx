import React from 'react';
const LABEL_8205 = 'component_8205';
export function Component8205({ value = 8205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8205, 'data-value': derived.doubled }, children);
}
export default Component8205;
