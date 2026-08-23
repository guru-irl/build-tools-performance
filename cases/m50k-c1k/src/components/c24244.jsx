import React from 'react';
const LABEL_24244 = 'component_24244';
export function Component24244({ value = 24244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24244, 'data-value': derived.doubled }, children);
}
export default Component24244;
