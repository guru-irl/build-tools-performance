import React from 'react';
const LABEL_43744 = 'component_43744';
export function Component43744({ value = 43744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43744, 'data-value': derived.doubled }, children);
}
export default Component43744;
