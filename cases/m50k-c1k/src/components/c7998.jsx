import React from 'react';
const LABEL_7998 = 'component_7998';
export function Component7998({ value = 7998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7998, 'data-value': derived.doubled }, children);
}
export default Component7998;
