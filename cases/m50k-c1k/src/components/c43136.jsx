import React from 'react';
const LABEL_43136 = 'component_43136';
export function Component43136({ value = 43136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43136, 'data-value': derived.doubled }, children);
}
export default Component43136;
