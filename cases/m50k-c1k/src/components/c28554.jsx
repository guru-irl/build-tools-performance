import React from 'react';
const LABEL_28554 = 'component_28554';
export function Component28554({ value = 28554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28554, 'data-value': derived.doubled }, children);
}
export default Component28554;
