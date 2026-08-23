import React from 'react';
const LABEL_15828 = 'component_15828';
export function Component15828({ value = 15828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15828, 'data-value': derived.doubled }, children);
}
export default Component15828;
