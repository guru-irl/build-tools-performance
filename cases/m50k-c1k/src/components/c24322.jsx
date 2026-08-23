import React from 'react';
const LABEL_24322 = 'component_24322';
export function Component24322({ value = 24322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24322, 'data-value': derived.doubled }, children);
}
export default Component24322;
