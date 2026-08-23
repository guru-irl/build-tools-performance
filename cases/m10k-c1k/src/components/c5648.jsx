import React from 'react';
const LABEL_5648 = 'component_5648';
export function Component5648({ value = 5648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5648, 'data-value': derived.doubled }, children);
}
export default Component5648;
