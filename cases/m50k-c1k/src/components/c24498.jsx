import React from 'react';
const LABEL_24498 = 'component_24498';
export function Component24498({ value = 24498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24498, 'data-value': derived.doubled }, children);
}
export default Component24498;
