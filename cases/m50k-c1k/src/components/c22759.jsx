import React from 'react';
const LABEL_22759 = 'component_22759';
export function Component22759({ value = 22759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22759, 'data-value': derived.doubled }, children);
}
export default Component22759;
