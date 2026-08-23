import React from 'react';
const LABEL_34598 = 'component_34598';
export function Component34598({ value = 34598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34598, 'data-value': derived.doubled }, children);
}
export default Component34598;
