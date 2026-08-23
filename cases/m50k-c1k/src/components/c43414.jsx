import React from 'react';
const LABEL_43414 = 'component_43414';
export function Component43414({ value = 43414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43414, 'data-value': derived.doubled }, children);
}
export default Component43414;
