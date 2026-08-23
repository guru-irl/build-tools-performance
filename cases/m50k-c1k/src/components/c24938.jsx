import React from 'react';
const LABEL_24938 = 'component_24938';
export function Component24938({ value = 24938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24938, 'data-value': derived.doubled }, children);
}
export default Component24938;
