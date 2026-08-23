import React from 'react';
const LABEL_26200 = 'component_26200';
export function Component26200({ value = 26200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26200, 'data-value': derived.doubled }, children);
}
export default Component26200;
