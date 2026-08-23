import React from 'react';
const LABEL_43090 = 'component_43090';
export function Component43090({ value = 43090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43090, 'data-value': derived.doubled }, children);
}
export default Component43090;
