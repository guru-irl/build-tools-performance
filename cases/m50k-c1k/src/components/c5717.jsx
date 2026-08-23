import React from 'react';
const LABEL_5717 = 'component_5717';
export function Component5717({ value = 5717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5717, 'data-value': derived.doubled }, children);
}
export default Component5717;
