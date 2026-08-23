import React from 'react';
const LABEL_10205 = 'component_10205';
export function Component10205({ value = 10205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10205, 'data-value': derived.doubled }, children);
}
export default Component10205;
