import React from 'react';
const LABEL_13386 = 'component_13386';
export function Component13386({ value = 13386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13386, 'data-value': derived.doubled }, children);
}
export default Component13386;
