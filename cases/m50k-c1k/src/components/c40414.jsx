import React from 'react';
const LABEL_40414 = 'component_40414';
export function Component40414({ value = 40414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40414, 'data-value': derived.doubled }, children);
}
export default Component40414;
