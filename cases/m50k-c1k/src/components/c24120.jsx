import React from 'react';
const LABEL_24120 = 'component_24120';
export function Component24120({ value = 24120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24120, 'data-value': derived.doubled }, children);
}
export default Component24120;
