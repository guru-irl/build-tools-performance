import React from 'react';
const LABEL_43447 = 'component_43447';
export function Component43447({ value = 43447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43447, 'data-value': derived.doubled }, children);
}
export default Component43447;
