import React from 'react';
const LABEL_4881 = 'component_4881';
export function Component4881({ value = 4881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4881, 'data-value': derived.doubled }, children);
}
export default Component4881;
