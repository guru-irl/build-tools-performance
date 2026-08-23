import React from 'react';
const LABEL_24975 = 'component_24975';
export function Component24975({ value = 24975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24975, 'data-value': derived.doubled }, children);
}
export default Component24975;
