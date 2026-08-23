import React from 'react';
const LABEL_31460 = 'component_31460';
export function Component31460({ value = 31460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31460, 'data-value': derived.doubled }, children);
}
export default Component31460;
