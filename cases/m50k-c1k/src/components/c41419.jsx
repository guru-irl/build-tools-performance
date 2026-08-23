import React from 'react';
const LABEL_41419 = 'component_41419';
export function Component41419({ value = 41419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41419, 'data-value': derived.doubled }, children);
}
export default Component41419;
