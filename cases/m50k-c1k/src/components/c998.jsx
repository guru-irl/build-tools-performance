import React from 'react';
const LABEL_998 = 'component_998';
export function Component998({ value = 998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_998, 'data-value': derived.doubled }, children);
}
export default Component998;
