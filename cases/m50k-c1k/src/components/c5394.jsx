import React from 'react';
const LABEL_5394 = 'component_5394';
export function Component5394({ value = 5394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5394, 'data-value': derived.doubled }, children);
}
export default Component5394;
