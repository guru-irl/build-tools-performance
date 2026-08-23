import React from 'react';
const LABEL_29960 = 'component_29960';
export function Component29960({ value = 29960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29960, 'data-value': derived.doubled }, children);
}
export default Component29960;
