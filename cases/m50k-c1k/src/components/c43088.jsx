import React from 'react';
const LABEL_43088 = 'component_43088';
export function Component43088({ value = 43088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43088, 'data-value': derived.doubled }, children);
}
export default Component43088;
