import React from 'react';
const LABEL_363 = 'component_363';
export function Component363({ value = 363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_363, 'data-value': derived.doubled }, children);
}
export default Component363;
