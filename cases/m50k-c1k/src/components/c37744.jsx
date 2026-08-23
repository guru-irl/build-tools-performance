import React from 'react';
const LABEL_37744 = 'component_37744';
export function Component37744({ value = 37744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37744, 'data-value': derived.doubled }, children);
}
export default Component37744;
