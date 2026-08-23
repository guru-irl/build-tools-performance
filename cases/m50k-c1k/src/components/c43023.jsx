import React from 'react';
const LABEL_43023 = 'component_43023';
export function Component43023({ value = 43023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43023, 'data-value': derived.doubled }, children);
}
export default Component43023;
