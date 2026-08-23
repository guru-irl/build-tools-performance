import React from 'react';
const LABEL_11297 = 'component_11297';
export function Component11297({ value = 11297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11297, 'data-value': derived.doubled }, children);
}
export default Component11297;
