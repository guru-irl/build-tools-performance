import React from 'react';
const LABEL_34645 = 'component_34645';
export function Component34645({ value = 34645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34645, 'data-value': derived.doubled }, children);
}
export default Component34645;
