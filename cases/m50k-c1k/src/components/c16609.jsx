import React from 'react';
const LABEL_16609 = 'component_16609';
export function Component16609({ value = 16609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16609, 'data-value': derived.doubled }, children);
}
export default Component16609;
