import React from 'react';
const LABEL_42768 = 'component_42768';
export function Component42768({ value = 42768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42768, 'data-value': derived.doubled }, children);
}
export default Component42768;
