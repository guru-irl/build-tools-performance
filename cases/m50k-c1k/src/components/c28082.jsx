import React from 'react';
const LABEL_28082 = 'component_28082';
export function Component28082({ value = 28082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28082, 'data-value': derived.doubled }, children);
}
export default Component28082;
