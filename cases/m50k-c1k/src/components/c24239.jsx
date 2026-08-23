import React from 'react';
const LABEL_24239 = 'component_24239';
export function Component24239({ value = 24239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24239, 'data-value': derived.doubled }, children);
}
export default Component24239;
