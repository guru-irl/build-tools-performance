import React from 'react';
const LABEL_7086 = 'component_7086';
export function Component7086({ value = 7086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7086, 'data-value': derived.doubled }, children);
}
export default Component7086;
