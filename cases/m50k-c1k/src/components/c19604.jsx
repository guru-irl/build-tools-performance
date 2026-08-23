import React from 'react';
const LABEL_19604 = 'component_19604';
export function Component19604({ value = 19604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19604, 'data-value': derived.doubled }, children);
}
export default Component19604;
