import React from 'react';
const LABEL_10082 = 'component_10082';
export function Component10082({ value = 10082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10082, 'data-value': derived.doubled }, children);
}
export default Component10082;
