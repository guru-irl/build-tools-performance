import React from 'react';
const LABEL_28425 = 'component_28425';
export function Component28425({ value = 28425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28425, 'data-value': derived.doubled }, children);
}
export default Component28425;
