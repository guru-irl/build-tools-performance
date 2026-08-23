import React from 'react';
const LABEL_36265 = 'component_36265';
export function Component36265({ value = 36265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36265, 'data-value': derived.doubled }, children);
}
export default Component36265;
