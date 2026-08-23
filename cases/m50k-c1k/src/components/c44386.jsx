import React from 'react';
const LABEL_44386 = 'component_44386';
export function Component44386({ value = 44386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44386, 'data-value': derived.doubled }, children);
}
export default Component44386;
