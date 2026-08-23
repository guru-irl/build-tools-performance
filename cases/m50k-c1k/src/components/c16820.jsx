import React from 'react';
const LABEL_16820 = 'component_16820';
export function Component16820({ value = 16820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16820, 'data-value': derived.doubled }, children);
}
export default Component16820;
