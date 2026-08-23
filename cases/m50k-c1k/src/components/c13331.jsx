import React from 'react';
const LABEL_13331 = 'component_13331';
export function Component13331({ value = 13331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13331, 'data-value': derived.doubled }, children);
}
export default Component13331;
