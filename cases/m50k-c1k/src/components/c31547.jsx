import React from 'react';
const LABEL_31547 = 'component_31547';
export function Component31547({ value = 31547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31547, 'data-value': derived.doubled }, children);
}
export default Component31547;
