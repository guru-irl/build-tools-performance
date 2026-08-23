import React from 'react';
const LABEL_24518 = 'component_24518';
export function Component24518({ value = 24518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24518, 'data-value': derived.doubled }, children);
}
export default Component24518;
