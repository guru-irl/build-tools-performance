import React from 'react';
const LABEL_8569 = 'component_8569';
export function Component8569({ value = 8569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8569, 'data-value': derived.doubled }, children);
}
export default Component8569;
