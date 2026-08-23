import React from 'react';
const LABEL_36820 = 'component_36820';
export function Component36820({ value = 36820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36820, 'data-value': derived.doubled }, children);
}
export default Component36820;
