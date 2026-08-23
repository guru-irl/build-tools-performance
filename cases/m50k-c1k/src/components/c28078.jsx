import React from 'react';
const LABEL_28078 = 'component_28078';
export function Component28078({ value = 28078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28078, 'data-value': derived.doubled }, children);
}
export default Component28078;
