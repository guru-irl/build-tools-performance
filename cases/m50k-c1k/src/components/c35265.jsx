import React from 'react';
const LABEL_35265 = 'component_35265';
export function Component35265({ value = 35265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35265, 'data-value': derived.doubled }, children);
}
export default Component35265;
