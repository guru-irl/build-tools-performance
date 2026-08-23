import React from 'react';
const LABEL_43412 = 'component_43412';
export function Component43412({ value = 43412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43412, 'data-value': derived.doubled }, children);
}
export default Component43412;
