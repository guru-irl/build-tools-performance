import React from 'react';
const LABEL_24082 = 'component_24082';
export function Component24082({ value = 24082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24082, 'data-value': derived.doubled }, children);
}
export default Component24082;
