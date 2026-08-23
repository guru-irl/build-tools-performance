import React from 'react';
const LABEL_8769 = 'component_8769';
export function Component8769({ value = 8769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8769, 'data-value': derived.doubled }, children);
}
export default Component8769;
