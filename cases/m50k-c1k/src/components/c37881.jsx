import React from 'react';
const LABEL_37881 = 'component_37881';
export function Component37881({ value = 37881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37881, 'data-value': derived.doubled }, children);
}
export default Component37881;
