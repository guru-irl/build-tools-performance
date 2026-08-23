import React from 'react';
const LABEL_44417 = 'component_44417';
export function Component44417({ value = 44417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44417, 'data-value': derived.doubled }, children);
}
export default Component44417;
