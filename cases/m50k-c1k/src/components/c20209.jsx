import React from 'react';
const LABEL_20209 = 'component_20209';
export function Component20209({ value = 20209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20209, 'data-value': derived.doubled }, children);
}
export default Component20209;
