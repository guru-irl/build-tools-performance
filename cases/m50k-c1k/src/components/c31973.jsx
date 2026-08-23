import React from 'react';
const LABEL_31973 = 'component_31973';
export function Component31973({ value = 31973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31973, 'data-value': derived.doubled }, children);
}
export default Component31973;
