import React from 'react';
const LABEL_28387 = 'component_28387';
export function Component28387({ value = 28387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28387, 'data-value': derived.doubled }, children);
}
export default Component28387;
