import React from 'react';
const LABEL_20554 = 'component_20554';
export function Component20554({ value = 20554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20554, 'data-value': derived.doubled }, children);
}
export default Component20554;
