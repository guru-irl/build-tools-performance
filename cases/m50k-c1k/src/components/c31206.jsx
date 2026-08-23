import React from 'react';
const LABEL_31206 = 'component_31206';
export function Component31206({ value = 31206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31206, 'data-value': derived.doubled }, children);
}
export default Component31206;
