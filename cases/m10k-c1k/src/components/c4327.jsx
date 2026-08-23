import React from 'react';
const LABEL_4327 = 'component_4327';
export function Component4327({ value = 4327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4327, 'data-value': derived.doubled }, children);
}
export default Component4327;
