import React from 'react';
const LABEL_41297 = 'component_41297';
export function Component41297({ value = 41297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41297, 'data-value': derived.doubled }, children);
}
export default Component41297;
