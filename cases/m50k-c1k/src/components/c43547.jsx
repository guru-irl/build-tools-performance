import React from 'react';
const LABEL_43547 = 'component_43547';
export function Component43547({ value = 43547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43547, 'data-value': derived.doubled }, children);
}
export default Component43547;
