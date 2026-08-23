import React from 'react';
const LABEL_7165 = 'component_7165';
export function Component7165({ value = 7165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7165, 'data-value': derived.doubled }, children);
}
export default Component7165;
