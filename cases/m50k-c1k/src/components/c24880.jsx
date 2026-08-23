import React from 'react';
const LABEL_24880 = 'component_24880';
export function Component24880({ value = 24880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24880, 'data-value': derived.doubled }, children);
}
export default Component24880;
