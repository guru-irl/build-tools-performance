import React from 'react';
const LABEL_12224 = 'component_12224';
export function Component12224({ value = 12224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12224, 'data-value': derived.doubled }, children);
}
export default Component12224;
