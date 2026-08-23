import React from 'react';
const LABEL_10574 = 'component_10574';
export function Component10574({ value = 10574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10574, 'data-value': derived.doubled }, children);
}
export default Component10574;
