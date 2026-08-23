import React from 'react';
const LABEL_20381 = 'component_20381';
export function Component20381({ value = 20381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20381, 'data-value': derived.doubled }, children);
}
export default Component20381;
