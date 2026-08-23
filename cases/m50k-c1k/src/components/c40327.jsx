import React from 'react';
const LABEL_40327 = 'component_40327';
export function Component40327({ value = 40327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40327, 'data-value': derived.doubled }, children);
}
export default Component40327;
