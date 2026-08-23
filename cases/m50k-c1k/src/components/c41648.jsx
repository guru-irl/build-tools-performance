import React from 'react';
const LABEL_41648 = 'component_41648';
export function Component41648({ value = 41648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41648, 'data-value': derived.doubled }, children);
}
export default Component41648;
