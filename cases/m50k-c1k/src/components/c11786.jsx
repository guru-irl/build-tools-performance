import React from 'react';
const LABEL_11786 = 'component_11786';
export function Component11786({ value = 11786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11786, 'data-value': derived.doubled }, children);
}
export default Component11786;
