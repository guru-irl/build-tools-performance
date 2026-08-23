import React from 'react';
const LABEL_23440 = 'component_23440';
export function Component23440({ value = 23440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23440, 'data-value': derived.doubled }, children);
}
export default Component23440;
