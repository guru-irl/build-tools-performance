import React from 'react';
const LABEL_12344 = 'component_12344';
export function Component12344({ value = 12344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12344, 'data-value': derived.doubled }, children);
}
export default Component12344;
