import React from 'react';
const LABEL_44598 = 'component_44598';
export function Component44598({ value = 44598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44598, 'data-value': derived.doubled }, children);
}
export default Component44598;
