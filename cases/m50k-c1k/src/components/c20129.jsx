import React from 'react';
const LABEL_20129 = 'component_20129';
export function Component20129({ value = 20129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20129, 'data-value': derived.doubled }, children);
}
export default Component20129;
