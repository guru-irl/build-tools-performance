import React from 'react';
const LABEL_15394 = 'component_15394';
export function Component15394({ value = 15394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15394, 'data-value': derived.doubled }, children);
}
export default Component15394;
