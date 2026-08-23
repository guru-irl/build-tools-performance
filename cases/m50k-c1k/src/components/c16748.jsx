import React from 'react';
const LABEL_16748 = 'component_16748';
export function Component16748({ value = 16748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16748, 'data-value': derived.doubled }, children);
}
export default Component16748;
