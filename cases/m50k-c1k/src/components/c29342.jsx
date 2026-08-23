import React from 'react';
const LABEL_29342 = 'component_29342';
export function Component29342({ value = 29342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29342, 'data-value': derived.doubled }, children);
}
export default Component29342;
