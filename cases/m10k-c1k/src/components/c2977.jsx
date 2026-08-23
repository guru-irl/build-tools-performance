import React from 'react';
const LABEL_2977 = 'component_2977';
export function Component2977({ value = 2977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2977, 'data-value': derived.doubled }, children);
}
export default Component2977;
