import React from 'react';
const LABEL_37652 = 'component_37652';
export function Component37652({ value = 37652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37652, 'data-value': derived.doubled }, children);
}
export default Component37652;
