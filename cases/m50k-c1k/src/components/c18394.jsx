import React from 'react';
const LABEL_18394 = 'component_18394';
export function Component18394({ value = 18394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18394, 'data-value': derived.doubled }, children);
}
export default Component18394;
