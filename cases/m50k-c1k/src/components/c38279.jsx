import React from 'react';
const LABEL_38279 = 'component_38279';
export function Component38279({ value = 38279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38279, 'data-value': derived.doubled }, children);
}
export default Component38279;
