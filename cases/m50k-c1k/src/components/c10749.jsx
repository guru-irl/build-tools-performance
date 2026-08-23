import React from 'react';
const LABEL_10749 = 'component_10749';
export function Component10749({ value = 10749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10749, 'data-value': derived.doubled }, children);
}
export default Component10749;
