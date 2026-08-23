import React from 'react';
const LABEL_20820 = 'component_20820';
export function Component20820({ value = 20820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20820, 'data-value': derived.doubled }, children);
}
export default Component20820;
