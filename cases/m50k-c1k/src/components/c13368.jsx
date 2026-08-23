import React from 'react';
const LABEL_13368 = 'component_13368';
export function Component13368({ value = 13368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13368, 'data-value': derived.doubled }, children);
}
export default Component13368;
