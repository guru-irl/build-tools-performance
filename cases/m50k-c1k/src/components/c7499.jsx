import React from 'react';
const LABEL_7499 = 'component_7499';
export function Component7499({ value = 7499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7499, 'data-value': derived.doubled }, children);
}
export default Component7499;
