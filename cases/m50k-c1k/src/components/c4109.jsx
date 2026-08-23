import React from 'react';
const LABEL_4109 = 'component_4109';
export function Component4109({ value = 4109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4109, 'data-value': derived.doubled }, children);
}
export default Component4109;
