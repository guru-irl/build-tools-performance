import React from 'react';
const LABEL_18717 = 'component_18717';
export function Component18717({ value = 18717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18717, 'data-value': derived.doubled }, children);
}
export default Component18717;
