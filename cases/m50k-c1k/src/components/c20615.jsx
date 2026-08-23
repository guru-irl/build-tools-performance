import React from 'react';
const LABEL_20615 = 'component_20615';
export function Component20615({ value = 20615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20615, 'data-value': derived.doubled }, children);
}
export default Component20615;
