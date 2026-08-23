import React from 'react';
const LABEL_28297 = 'component_28297';
export function Component28297({ value = 28297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28297, 'data-value': derived.doubled }, children);
}
export default Component28297;
