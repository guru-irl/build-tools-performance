import React from 'react';
const LABEL_37152 = 'component_37152';
export function Component37152({ value = 37152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37152, 'data-value': derived.doubled }, children);
}
export default Component37152;
