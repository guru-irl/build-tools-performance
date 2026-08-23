import React from 'react';
const LABEL_20730 = 'component_20730';
export function Component20730({ value = 20730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20730, 'data-value': derived.doubled }, children);
}
export default Component20730;
