import React from 'react';
const LABEL_43394 = 'component_43394';
export function Component43394({ value = 43394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43394, 'data-value': derived.doubled }, children);
}
export default Component43394;
