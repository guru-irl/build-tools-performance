import React from 'react';
const LABEL_41744 = 'component_41744';
export function Component41744({ value = 41744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41744, 'data-value': derived.doubled }, children);
}
export default Component41744;
