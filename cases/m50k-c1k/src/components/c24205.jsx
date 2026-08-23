import React from 'react';
const LABEL_24205 = 'component_24205';
export function Component24205({ value = 24205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24205, 'data-value': derived.doubled }, children);
}
export default Component24205;
