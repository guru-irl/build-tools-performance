import React from 'react';
const LABEL_13082 = 'component_13082';
export function Component13082({ value = 13082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13082, 'data-value': derived.doubled }, children);
}
export default Component13082;
