import React from 'react';
const LABEL_25072 = 'component_25072';
export function Component25072({ value = 25072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25072, 'data-value': derived.doubled }, children);
}
export default Component25072;
