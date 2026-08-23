import React from 'react';
const LABEL_43440 = 'component_43440';
export function Component43440({ value = 43440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43440, 'data-value': derived.doubled }, children);
}
export default Component43440;
