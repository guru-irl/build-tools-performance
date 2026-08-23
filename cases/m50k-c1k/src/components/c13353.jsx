import React from 'react';
const LABEL_13353 = 'component_13353';
export function Component13353({ value = 13353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13353, 'data-value': derived.doubled }, children);
}
export default Component13353;
