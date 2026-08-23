import React from 'react';
const LABEL_30598 = 'component_30598';
export function Component30598({ value = 30598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30598, 'data-value': derived.doubled }, children);
}
export default Component30598;
