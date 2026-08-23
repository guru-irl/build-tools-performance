import React from 'react';
const LABEL_16016 = 'component_16016';
export function Component16016({ value = 16016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16016, 'data-value': derived.doubled }, children);
}
export default Component16016;
