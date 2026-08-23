import React from 'react';
const LABEL_6205 = 'component_6205';
export function Component6205({ value = 6205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6205, 'data-value': derived.doubled }, children);
}
export default Component6205;
