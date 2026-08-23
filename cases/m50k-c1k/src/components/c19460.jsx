import React from 'react';
const LABEL_19460 = 'component_19460';
export function Component19460({ value = 19460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19460, 'data-value': derived.doubled }, children);
}
export default Component19460;
