import React from 'react';
const LABEL_37353 = 'component_37353';
export function Component37353({ value = 37353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37353, 'data-value': derived.doubled }, children);
}
export default Component37353;
