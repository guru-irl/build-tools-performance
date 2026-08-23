import React from 'react';
const LABEL_37838 = 'component_37838';
export function Component37838({ value = 37838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37838, 'data-value': derived.doubled }, children);
}
export default Component37838;
