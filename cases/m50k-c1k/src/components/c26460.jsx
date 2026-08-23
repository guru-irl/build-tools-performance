import React from 'react';
const LABEL_26460 = 'component_26460';
export function Component26460({ value = 26460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26460, 'data-value': derived.doubled }, children);
}
export default Component26460;
