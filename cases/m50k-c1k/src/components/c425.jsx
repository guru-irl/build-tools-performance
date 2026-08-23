import React from 'react';
const LABEL_425 = 'component_425';
export function Component425({ value = 425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_425, 'data-value': derived.doubled }, children);
}
export default Component425;
