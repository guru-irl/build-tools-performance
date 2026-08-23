import React from 'react';
const LABEL_5798 = 'component_5798';
export function Component5798({ value = 5798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5798, 'data-value': derived.doubled }, children);
}
export default Component5798;
