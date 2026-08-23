import React from 'react';
const LABEL_18498 = 'component_18498';
export function Component18498({ value = 18498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18498, 'data-value': derived.doubled }, children);
}
export default Component18498;
