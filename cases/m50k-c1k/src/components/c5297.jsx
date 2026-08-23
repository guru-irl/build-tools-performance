import React from 'react';
const LABEL_5297 = 'component_5297';
export function Component5297({ value = 5297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5297, 'data-value': derived.doubled }, children);
}
export default Component5297;
