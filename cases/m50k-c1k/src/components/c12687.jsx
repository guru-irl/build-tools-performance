import React from 'react';
const LABEL_12687 = 'component_12687';
export function Component12687({ value = 12687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12687, 'data-value': derived.doubled }, children);
}
export default Component12687;
