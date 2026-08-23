import React from 'react';
const LABEL_15204 = 'component_15204';
export function Component15204({ value = 15204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15204, 'data-value': derived.doubled }, children);
}
export default Component15204;
