import React from 'react';
const LABEL_24620 = 'component_24620';
export function Component24620({ value = 24620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24620, 'data-value': derived.doubled }, children);
}
export default Component24620;
