import React from 'react';
const LABEL_41329 = 'component_41329';
export function Component41329({ value = 41329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41329, 'data-value': derived.doubled }, children);
}
export default Component41329;
