import React from 'react';
const LABEL_43698 = 'component_43698';
export function Component43698({ value = 43698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43698, 'data-value': derived.doubled }, children);
}
export default Component43698;
