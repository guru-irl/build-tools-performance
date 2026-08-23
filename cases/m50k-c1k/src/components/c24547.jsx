import React from 'react';
const LABEL_24547 = 'component_24547';
export function Component24547({ value = 24547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24547, 'data-value': derived.doubled }, children);
}
export default Component24547;
