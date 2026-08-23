import React from 'react';
const LABEL_36628 = 'component_36628';
export function Component36628({ value = 36628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36628, 'data-value': derived.doubled }, children);
}
export default Component36628;
