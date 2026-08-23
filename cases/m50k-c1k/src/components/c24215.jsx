import React from 'react';
const LABEL_24215 = 'component_24215';
export function Component24215({ value = 24215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24215, 'data-value': derived.doubled }, children);
}
export default Component24215;
