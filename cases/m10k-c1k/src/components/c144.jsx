import React from 'react';
const LABEL_144 = 'component_144';
export function Component144({ value = 144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_144, 'data-value': derived.doubled }, children);
}
export default Component144;
