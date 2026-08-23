import React from 'react';
const LABEL_18697 = 'component_18697';
export function Component18697({ value = 18697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18697, 'data-value': derived.doubled }, children);
}
export default Component18697;
